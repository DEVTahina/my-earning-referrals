/**
 * Dictionnaire français — source de vérité des clés d'interface.
 * Chaque clé ajoutée ici doit l'être aussi dans `mg.ts` :
 * TypeScript refuse les clés inconnues dans `mg` et autorise le repli
 * sur le français pour une clé absente.
 */
export const fr = {
  /* ---------- Navigation & actions ---------- */
  "nav.home": "Accueil",
  "nav.platforms": "Plateformes",
  "nav.apps": "Applications",
  "nav.how": "Comment ça marche",
  "nav.ariaMain": "Navigation principale",
  "nav.ariaMobile": "Navigation mobile",
  "nav.ariaFooter": "Navigation pied de page",
  "menu.open": "Ouvrir le menu",
  "menu.close": "Fermer le menu",
  "cta.start": "Commencer à gagner",
  "cta.seePlatforms": "Voir les plateformes",
  "cta.soon": "Bientôt disponible",

  /* ---------- Sélecteurs (thème / langue) ---------- */
  "theme.enableLight": "Activer le mode clair",
  "theme.enableDark": "Activer le mode sombre",
  "theme.switchLight": "Passer en mode clair",
  "theme.switchDark": "Passer en mode sombre",
  "lang.switch": "Changer de langue",

  /* ---------- Hero ---------- */
  "hero.title": "Découvrez des plateformes pour",
  "hero.titleAccent": "gagner en ligne",
  "hero.subtitle":
    "Micro-tâches, sondages, rewards et applications : trouvez des plateformes adaptées à vos besoins et commencez simplement.",
  "hero.note": "Accès gratuit • Liens de présentation • Aucune inscription sur ce site",

  /* ---------- Statistiques ---------- */
  "stats.aria": "Introduction",
  "stats.platforms": "plateformes disponibles",
  "stats.web": "accessibles via navigateur",
  "stats.mobile": "applications mobiles",
  "stats.access": "accès simple, sans inscription ici",

  /* ---------- Sections d'accueil ---------- */
  "featured.eyebrow": "Sélection",
  "featured.title": "Plateformes recommandées",
  "featured.subtitle": "Une sélection de plateformes à découvrir parmi celles présentées.",
  "web.title": "Plateformes Web",
  "web.subtitle": "Découvrez différentes plateformes accessibles depuis votre navigateur.",
  "apps.title": "Applications mobiles",
  "apps.subtitle":
    "Des applications à installer sur votre smartphone pour gagner où que vous soyez.",

  /* ---------- Comment ça marche ---------- */
  "how.eyebrow": "Guide",
  "how.title": "Comment ça marche ?",
  "how.subtitle": "Quatre étapes simples pour commencer sur les plateformes présentées.",
  "how.s1.title": "Choisissez une plateforme",
  "how.s1.text": "Parcourez la liste et sélectionnez celle qui correspond à vos envies.",
  "how.s2.title": "Inscrivez-vous avec mon lien",
  "how.s2.text": "Créez votre compte sur la plateforme via le bouton dédié.",
  "how.s3.title": "Effectuez les tâches disponibles",
  "how.s3.text": "Micro-tâches, sondages, offres : chaque plateforme propose ses missions.",
  "how.s4.title": "Recevez vos récompenses",
  "how.s4.text": "Selon les conditions de chaque plateforme, cumulez vos gains.",

  /* ---------- Bloc final ---------- */
  "cta.title": "Prêt à commencer ?",
  "cta.text":
    "Découvrez les plateformes disponibles et choisissez celle qui vous convient.",

  /* ---------- Footer ---------- */
  "footer.copy": "Tous droits réservés.",

  /* ---------- Cartes ---------- */
  "card.featured": "À la une",
  "card.payments": "Méthodes de paiement",
  "card.paymentsAria": "Voir les méthodes de paiement de {name}",
  "card.about": "À propos",
  "card.aboutAria": "En savoir plus sur {name}",
  "card.startAria": "Commencer à gagner avec {name} (nouvel onglet)",
  "card.logoAlt": "Logo {name}",

  /* ---------- Modal paiements ---------- */
  "modal.note": "Créez votre portefeuille pour recevoir vos gains :",
  "modal.close": "Fermer",
  "modal.closeAria": "Fermer le modal des méthodes de paiement",
  "modal.newTab": "{name} — ouvrir dans un nouvel onglet",

  /* ---------- Sommaire ---------- */
  "toc.label": "Sommaire",
  "toc.aria": "Sommaire du guide",

  /* ---------- Page détail : méta & introuvable ---------- */
  "meta.title": "{name} : guide complet, fonctionnement et comment gagner | EarnZone",
  "meta.description":
    "Découvrez comment fonctionne {name}, comment créer un compte, effectuer les tâches disponibles et comprendre les récompenses.",
  "meta.notFoundTitle": "Plateforme introuvable | EarnZone",
  "meta.notFoundDesc": "Cette plateforme n'existe pas sur EarnZone.",
  "nf.title": "Plateforme introuvable",
  "nf.text": "Cette plateforme n'existe pas ou a été retirée.",
  "nf.back": "Retour à l'accueil",

  /* ---------- Page détail : héros ---------- */
  "details.back": "Retour aux plateformes",
  "details.seeGuide": "Voir le guide A → Z",
  "details.verified": "Informations vérifiées le {date}",
  "details.coverage":
    "Documentation officielle limitée : ce guide ne décrit que ce qui a pu être vérifié sur les sources publiques de la plateforme.",
  "details.finalTitle": "Prêt à essayer {name} ?",
  "details.finalNote":
    "Les fonctionnalités, tâches, récompenses, méthodes de paiement et conditions peuvent évoluer. Vérifiez toujours les informations actuelles sur la plateforme officielle. Les gains ne sont pas garantis : ils dépendent des tâches disponibles, de votre pays, de votre profil et de votre activité.",

  /* ---------- Page détail : sections du guide ---------- */
  "s.presentation.label": "Présentation",
  "s.presentation.title": "Qu'est-ce que {name} ?",
  "s.howWorks.label": "Fonctionnement",
  "s.howWorks.title": "Comment fonctionne {name} ?",
  "s.methods.label": "Méthodes pour gagner",
  "s.methods.title": "Les différentes façons de gagner",
  "s.methods.intro":
    "Chaque méthode ci-dessous est documentée par la plateforme. Ouvrez un bloc pour voir le détail et les étapes.",
  "s.features.label": "Fonctionnalités",
  "s.features.title": "Fonctionnalités principales",
  "s.signup.label": "Créer un compte",
  "s.signup.title": "Comment créer un compte ?",
  "s.profile.label": "Configurer son profil",
  "s.profile.title": "Configurer son profil",
  "s.dashboard.label": "Le tableau de bord",
  "s.dashboard.title": "Découvrir le tableau de bord",
  "s.dashboard.intro": "Les sections réellement présentes sur {name} :",
  "s.guide.label": "Guide A → Z",
  "s.guide.title": "Guide complet pour débuter",
  "s.refused.label": "Tâche refusée",
  "s.refused.title": "Pourquoi une tâche peut-elle être refusée ?",
  "s.withdraw.label": "Retrait",
  "s.withdraw.title": "Comment retirer ses récompenses ?",
  "s.withdraw.min": "Seuil minimum",
  "s.withdraw.delay": "Délai",
  "s.rules.label": "Règles importantes",
  "s.rules.title": "Règles importantes",
  "s.mistakes.label": "Erreurs à éviter",
  "s.mistakes.title": "Erreurs à éviter",
  "s.tips.label": "Comment gagner plus",
  "s.tips.title": "Comment gagner plus (sans promesse)",
  "s.tips.note":
    "Aucun montant n'est garanti : vos gains dépendent des tâches disponibles, de votre pays, de votre profil et des conditions de la plateforme.",
  "s.referral.label": "Parrainage",
  "s.referral.title": "Le programme de parrainage",
  "s.faq.label": "FAQ",
  "s.faq.title": "Questions fréquentes",
} as const;

export type TranslationKey = keyof typeof fr;
