# EarnZone — Analytics & tracking (GA4 + Bitly)

Document d'installation et d'exploitation de la couche analytics du projet.
Couche **technique indépendante** : aucun design, contenu, guide, lien referral ou
donnée n'a été modifié pour l'ajouter.

---

## 1. Vue d'ensemble

| Brique | Rôle | Où |
| --- | --- | --- |
| Google Analytics 4 (gtag.js) | visiteurs, sessions, pages vues, provenance, clics referral | dans le site |
| Bitly | mesure des clics sur le lien partagé sur les réseaux sociaux | **externe au code** |
| UTM | découpage des campagnes (Facebook, etc.) | dans l'URL |

**Il n'y a aucune intégration API Bitly dans le projet** (voir §7) et **aucune
dépendance npm ajoutée** pour l'analytics.

Flux de données réel :

```
Facebook  →  Bitly  →  EarnZone (Render)  →  GA4 (visiteurs + page_view)
                                        └── clic "Commencer à gagner"
                                              → GA4 : referral_click
                                              → opening du lien referral d'origine
```

---

## 2. Fichiers concernés

| Fichier | Rôle |
| --- | --- |
| `src/lib/analytics.ts` | service centralisé : init, `page_view`, `referral_click`, debug |
| `src/main.tsx` | appel unique à `initAnalytics()` **avant** le premier rendu |
| `src/App.tsx` | `<AnalyticsRouteTracker />` : 1 `page_view` par navigation |
| `src/components/PlatformCard.tsx` | tracking du CTA « Commencer à gagner » (section Plateformes + Sélection) |
| `src/components/MobileAppCard.tsx` | idem pour la carte application mobile |
| `src/pages/PlatformDetails.tsx` | idem pour le CTA de la page guide |
| `src/components/PaymentMethodsModal.tsx` | tracking des liens wallet (FaucetPay, Binance) |
| `src/vite-env.d.ts` | typage de `VITE_GA_MEASUREMENT_ID` |
| `.env` / `.env.example` | variable d'environnement (`.env` ignoré par Git) |
| `render.yaml` | déclaration de la variable (`sync: false`) |

---

## 3. Google Analytics 4

### 3.1 Propriété déjà créée

| Champ | Valeur |
| --- | --- |
| Nom du flux | EarnZone Web |
| URL de flux | https://earnzone-34n5.onrender.com |
| ID de flux | 15949679440 |
| **ID de mesure (Measurement ID)** | **G-YDCRZRYM09** |

L'ID de mesure est le seul identifiant à utiliser dans le code. **Il n'est jamais
écrit en dur** dans un composant : il est lu via `import.meta.env.VITE_GA_MEASUREMENT_ID`.

### 3.2 Si vous devez recréer la propriété (procédure suivie)

1. Google Analytics → **Admin** → **Créer une propriété**.
2. Type : **Web**, puis **Créer un flux Web** → *URL du site et nom de domaine*.
3. Renseigner l'URL du site : `https://earnzone-34n5.onrender.com`.
4. Après création, ouvrir **Administration → Flux → EarnZone Web** :
   * **ID de flux** et **ID de mesure** (`G-…`) s'affichent en haut.
5. Copier l'ID de mesure → l'utiliser comme `VITE_GA_MEASUREMENT_ID` (voir §4).

### 3.3 Enhanced Measurement — réglage IMPORTANT

Dans **Admin → Flux → EarnZone Web → Enhanced Measurement** :

* **Laisse activé** : page views, défilement, sorties (outbound), etc.
* **Désactive** l'option *« Changements de page en fonction des événements
  d'historique du navigateur »* (Page changes based on browser history events).

> Raison : EarnZone est une SPA qui envoie **elle-même** un `page_view` à chaque
> changement de route (avec le bon titre et la bonne URL). Si cette option reste
> active, Google Analytics compterait **deux** `page_view` par navigation.
> Le premier envoi de `page_view` au chargement est déjà neutralisé côté code
> (`send_page_view: false` dans la configuration GA4).

### 3.4 Ce qui est mesuré

| Objectif du brief | Comment |
| --- | --- |
| Nombre de visiteurs | rapport *Utilisateurs* (Users) |
| Sessions | rapport *Sessions* / *Temps réel* |
| Pages consultées | `page_view` (SPA : accueil + `/platforms/:id`) |
| Provenance | rapport *Acquisition → Trafic* (avec UTM) |
| Trafic Facebook | *Acquisition → Trafic → Réseaux sociaux* (LinkedIn = Facebook) |
| Clics « Commencer à gagner » | événement `referral_click` |
| Plateforme la plus cliquée | `referral_click` filtré sur `platform_name` |
| Nombre de clics par plateforme | idem, avec `platform_id` |
| Clics sur liens externes | `link_url` + mesure *sorties* de l'Enhanced Measurement |
| Comportement général | temps d'engagement, engagement, sorties |

---

## 4. Ajouter `VITE_GA_MEASUREMENT_ID` sur Render

Le site est un **Static Site** : la variable est lue **au moment du build**,
puis figée dans le bundle. Il faut donc la définir puis **redéployer**.

### Option A — Dashboard Render (recommandé)

1. https://dashboard.render.com → sélectionner le service **earnzone**.
2. Menu **…** → **Environment** (ou *Environment Variables*).
3. **Add Environment Variable** :
   * **Key** : `VITE_GA_MEASUREMENT_ID`
   * **Value** : `G-YDCRZRYM09`
4. **Save**, puis **Manual Deploy → Clear build cache & deploy** (obligatoire :
   la variable n'est injectée qu'au build).
5. Vérifier : `https://earnzone-34n5.onrender.com` doit charger
   `https://www.googletagmanager.com/gtag/js?id=G-YDCRZRYM09`
   (visible dans l'onglet *Network* de Chrome).

> `render.yaml` déclare déjà la clé avec `sync: false` : la valeur reste saisie
> dans le Dashboard et n'est jamais versionnée dans Git.

### Option B — en local

```bash
cp .env.example .env      # puis remplacer G-XXXXXXXXXX par G-YDCRZRYM09
npm run dev               # ou npm run build && npm run preview
```

`.env` est ignoré par Git (`.gitignore`), `.env.example` est versionné **sans
valeur réelle**.

### Sans configuration (site en local, CI, etc.)

Si `VITE_GA_MEASUREMENT_ID` est absent, `initAnalytics()` et
`trackReferralClick()` deviennent des no-op : **le site fonctionne
exactement pareil**, sans crash ni écran blanc. Aucun tag GA n'est chargé.

---

## 5. Événement `referral_click`

Déclenché **au moment du clic**, avant l'ouverture du lien. Le `href` n'est
jamais modifié : le visiteur arrive toujours sur le lien referral d'origine.

```js
gtag("event", "referral_click", {
  platform_id: "minitasky",     // platform.id
  platform_name: "MiniTasky",   // platform.name
  category: "website",          // platform.category
  cta_location: "platform_card",
  link_url: "https://minitasky.com/?ref=94f7fea1"
});
```

### Paramètres

| Paramètre | Valeurs possibles | Origine |
| --- | --- | --- |
| `platform_id` | `euroads`, `minitasky`, `timebucks`, `surveoo`, `faucetpay`, `binance`, `honeygain`, `firefaucet`, `luckywatch`… (16) | `platform.id` |
| `platform_name` | `MiniTasky`, `TimeBucks`, `Surveoo`… | `platform.name` |
| `category` | `website`, `mobile`, `wallet` | `platform.category` |
| `cta_location` | `platform_card`, `mobile_app_card`, `platform_details`, `payment_methods_modal` | composant qui affiche le CTA |
| `link_url` | URL referral complète | `platform.referralUrl` (inchangée) |

**Aucune donnée personnelle** n'est envoyée : ni email, ni nom, ni téléphone, ni
adresse, ni mot de passe. `anonymize_ip: true` est activé dans la configuration GA4.

### Points de déclenchement

| Emplacement | `cta_location` |
| --- | --- |
| Card « Plateformes Web » + card « Sélection » | `platform_card` |
| Card « Applications mobiles » | `mobile_app_card` |
| Bouton de la page guide (`/platforms/:id`) | `platform_details` |
| Modal « Méthodes de paiement » (FaucetPay, Binance) | `payment_methods_modal` (avec `category: wallet`) |

La fonction est centralisée dans `src/lib/analytics.ts` : aucun composant ne
duplique la logique.

---

## 6. Vérifier que tout fonctionne

### 6.1 En local / avant déploiement

* Chrome → **F12 → Console** : en développement, chaque événement affiche
  ```
  [analytics] referral_click {platform_id: "minitasky", …}
  ```
  (les logs n'existent qu'en `npm run dev`, jamais en production).
* Chrome → **F12 → Network** : filtrer sur `collect` ou `google-analytics.com`
  pour voir les hits. Ajouter `debug_mode: true` n'est pas nécessaire en GA4 gtag.
* Chrome → **Console** : `window.dataLayer` doit contenir
  `["event","referral_click",{…}]` et `["event","page_view",{…}]`.

### 6.2 Dans GA4

* **Temps réel** (menu *Activité* ou *Rapports → Temps réel*) : ouvrir le site,
  cliquer sur 2-3 CTA → les événements doivent apparaître en direct avec leurs
  paramètres.
* **Events** (menu *Activité → Événements*) → `referral_click` doit exister.

---

## 7. Bitly (externe au code)

**Aucune intégration Bitly n'est nécessaire ni utilisée.** EarnZone ne dépend pas
de Bitly : si le lien court est supprimé ou modifié, le site continue de
fonctionner avec `https://earnzone-34n5.onrender.com`.

### Créer et partager le lien court

1. https://bitly.com → **Create a Bitlink**.
2. *Long URL* : une URL EarnZone **avec UTM** (voir §8), par exemple
   `https://earnzone-34n5.onrender.com/?utm_source=facebook&utm_medium=social&utm_campaign=earnzone_launch`
3. *Title* : `EarnZone`, *Description* : `Plateformes de micro-tâches`.
4. **Create** → raccourcir (par ex. `https://bit.ly/XXXXXXXX`).
5. Coller ce lien court dans le post Facebook.
6. Dans Bitly : l'onglet du lien montre le **nombre de clics** et les statistiques
   par pays/appareil → c'est la mesure « clic sur le lien partagé ».

> Rappel : Bitly compte les **clics sur le lien partagé**, GA4 compte les
> **visiteurs et les clics sur les plateformes**. Les deux se complètent,
> aucun ne remplace l'autre.

---

## 8. Campagnes UTM

Format utilisé :

```
?utm_source=facebook&utm_medium=social&utm_campaign=earnzone_launch
```

| Paramètre | Rôle |
| --- | --- |
| `utm_source` | origine (`facebook`, `telegram`, `whatsapp`…) |
| `utm_medium` | canal (`social`, `cpc`, `referral`…) |
| `utm_campaign` | nom de campagne (`earnzone_launch`, `earnzone_post1`…) |

* Les paramètres **ne sont jamais supprimés** : EarnZone les conserve dans l'URL,
  y compris dans l'URL mesurée par GA4 (`page_path`).
* En navigation interne (vers une page guide), les paramètres disparaissent de la
  barre d'adresse car React Router gère la route ; c'est sans effet sur la
  mesure : GA4 a déjà enregistré la page d'origine avec ses UTM.

---

## 9. Privacy & cookies

* GA4 est chargé avec `anonymize_ip: true` et n'envoie **aucune donnée
  personnelle** dans les événements personnalisés.
* Aucune donnée n'est transmise au serveur d'EarnZone : le site est 100 % statique.
* Google Analytics dépose des cookies tiers (`_ga`, `_ga_*`) et collecte des
  données statistiques (pages vues, provenance, environnement).
* **Aucun système de consentement n'a été ajouté** : ce n'était pas nécessaire
  pour la tâche. Si EarnZone est ensuite destiné à des visiteurs de l'Union
  européenne, il faudra (a) vérifier l'obligation de consentement prioritaire
  (RGPD / ePrivacy) selon les pays ciblés, et (b) si elle s'applique,  mettre en place un bandeau de consentement qui **bloque le chargement de gtag.js**
  jusqu'à l'acceptation. Le code est déjà écrit pour ça : il suffit de déporter
  l'appel à `initAnalytics()` (dans `src/main.tsx`) au moment de l'acceptation,
  ou de le conditionner à un booléen `consent`.

---

## 10. Rapport « quelle plateforme reçoit le plus de clics ? »

Dans GA4 :

1. **Activité → Événements** → `referral_click` → **Afficher les paramètres**.
2. Cliquer sur **`platform_name`** pour obtenir la répartition par plateforme
   (ou sur `platform_id` pour l'identifiant technique).
3. Ajouter une dimension secondaire :
   * `cta_location` → distingue les clics depuis les cards, la page détail ou le
     modal de paiement ;
   * `category` → sites web, applications mobiles, wallets.
4. Croiser avec **Pages et écrans** pour savoir depuis quelle page vient le clic.

Exemple de lecture du rapport (format attendu, **chiffres à remplir par vos
données réelles** — aucune statistique n'est inventée ici) :

| platform_name | platform_id | category | Clics |
| --- | --- | --- | --- |
| MiniTasky | minitasky | website | _votre valeur_ |
| TimeBucks | timebucks | website | _votre valeur_ |
| Surveoo | surveoo | website | _votre valeur_ |
| Honeygain | honeygain | website | _votre valeur_ |
| FireFaucet | firefaucet | website | _votre valeur_ |
| FaucetPay | faucetpay | website | _votre valeur_ |
| Binance | binance | website | _votre valeur_ |
| LuckyWatch | luckywatch | mobile | _votre valeur_ |

Les 16 plateformes du site sont trackées : EuroAds, MakeYouTask, Coinli, Aviso,
MiniTasky, EarnToday, TeerByte, MXFins, FireFaucet, PR Social Tasks, TimeBucks,
Surveoo, FaucetPay, Binance, Honeygain, LuckyWatch.

---

## 11. Dépannage

| Symptôme | Cause probable | Solution |
| --- | --- | --- |
| Aucun tag GA dans le `<head>` | variable absente au build | ajouter `VITE_GA_MEASUREMENT_ID` sur Render puis **Clear build cache & deploy** |
| Tag chargé mais 0 événement en temps réel | filtre de debug actif ou mauvaise propriété | vérifier l'ID de mesure dans le Network (`gtag/js?id=…`) et le filtre "Comparaison" |
| 2 `page_view` par navigation | Enhanced Measurement « changements de page via l'historique » activé | désactiver cette option (§3.3) |
| `referral_click` absent sur un bouton | CTA non tracké | tous les CTA referral sont trackés (§5) ; vérifier `console.debug` en dev |
| Le clic ouvre le lien sans onglet | — | `target="_blank"` + `rel="noopener noreferrer"` conservés sur tous les liens |
| Build bloqué par TypeScript | — | `npm run build` = `tsc -b && vite build` — toute erreur doit être corrigée avant commit |
