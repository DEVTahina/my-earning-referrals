import type { TranslationKey } from "./fr";

/**
 * Dictionnaire malgache de l'interface.
 * Clé absente = repli automatique sur le français (`t()` lit `fr` ensuite),
 * clé inconnue = erreur TypeScript.
 */
export const mg: Partial<Record<TranslationKey, string>> = {
  /* ---------- Navigation & actions ---------- */
  "nav.home": "Fandraisana",
  "nav.platforms": "Sehatra",
  "nav.apps": "Rakikiray",
  "nav.how": "Ahoana ny fiasa",
  "nav.ariaMain": "Fijery lehibe",
  "nav.ariaMobile": "Fijery amin'ny finday",
  "nav.ariaFooter": "Fijery ambany pejy",
  "menu.open": "Sokafy ny tononkalo",
  "menu.close": "Atsangano ny tononkalo",
  "cta.start": "Hanomboka hahazo vola",
  "cta.seePlatforms": "Jereo ny sehatra",
  "cta.soon": "Ho avy haingana",

  /* ---------- Sélecteurs (thème / langue) ---------- */
  "theme.enableLight": "Ampiasao ny endrika mamena",
  "theme.enableDark": "Ampiasao ny endrika maizina",
  "theme.switchLight": "Hiditra amin'ny endrika mamena",
  "theme.switchDark": "Hiditra amin'ny endrika maizina",
  "lang.switch": "Ovizo ny teny",

  /* ---------- Hero ---------- */
  "hero.title": "Tadio ilay sehatra",
  "hero.titleAccent": "hahazo vola an-tératra",
  "hero.subtitle":
    "Asa kely, fanazavana, fankasitrahana sy rakikiray : ijiro ny sehatra mety ampinana aminao ary hanomboka tsotra.",
  "hero.note":
    "Fampidirana tsy misy vidy • Rohy fampirantiana • Tsy misy fanoratana anarana eto amin'ny tranonkala",

  /* ---------- Statistiques ---------- */
  "stats.aria": "Fampahalalana farany",
  "stats.platforms": "sehatra azo ampiasaina",
  "stats.web": "azo jiraina amin'ny mpifandeha",
  "stats.mobile": "rakikiray amin'ny finday",
  "stats.access": "fampidirana tsotra, tsy misy fanoratana anarana eto",

  /* ---------- Sections d'accueil ---------- */
  "featured.eyebrow": "Safidy",
  "featured.title": "Sehatra tohavana",
  "featured.subtitle": "Safidy sehatra azo jerena ao anatin'ireo nosoratana eto.",
  "web.title": "Sehatra an-tératra",
  "web.subtitle": "Jereo ireo sehatra samihafa azo jiraina amin'ny mpifandehanao.",
  "apps.title": "Rakikiray amin'ny finday",
  "apps.subtitle":
    "Rakikiray hatao fananganana amin'ny smartphone-nao mba hahazo vola na aiza na aiza ianao.",

  /* ---------- Comment ça marche ---------- */
  "how.eyebrow": "Torolalana",
  "how.title": "Ahoana ny fiasa ?",
  "how.subtitle": "Tolom-baraka efatra ho an'ny fanombohana amin'ireo sehatra voasoratra eto.",
  "how.s1.title": "Mifidy sehatra iray",
  "how.s1.text": "Jereo ny lisitry ny sehatra ary safidio inona no mifanaraka amin'ny tianao.",
  "how.s2.title": "Hisoratana anarana amin'ny rohy nataoko",
  "how.s2.text": "Manao kaontyao ao amin'ny sehatra amin'ny alalan'ny tsindrina manokana.",
  "how.s3.title": "Atao ny asa azo atao",
  "how.s3.text": "Asa kely, fanazavana, fivarotana : ny sehatra tsirairay manome ny asany.",
  "how.s4.title": "Mandray ny fankasitrahanao",
  "how.s4.text": "Araka ny fetra ao amin'ny sehatra tsirairay, antonoy ny volanao.",

  /* ---------- Bloc final ---------- */
  "cta.title": "Vonona hanomboka ?",
  "cta.text": "Jereo ny sehatra azo ampiasaina ary safidio inona no mety ampinana aminao.",

  /* ---------- Footer ---------- */
  "footer.copy": "Zon'ny tomoko ny zo rehetra.",

  /* ---------- Cartes ---------- */
  "card.featured": "Amin'ny laharana",
  "card.payments": "Fomba fandoana vola",
  "card.paymentsAria": "Jereo ny fomba fandoana vola amin'i {name}",
  "card.about": "Momba",
  "card.aboutAria": "Fantaro fanampiny momba an'i {name}",
  "card.startAria": "Hanomboka hahazo vola amin'i {name} (fonosana vaovao)",
  "card.logoAlt": "Sary an'i {name}",

  /* ---------- Modal paiements ---------- */
  "modal.note": "Manao poamanao mba hahafahananao mandray ny volanao :",
  "modal.close": "Atsangano",
  "modal.closeAria": "Atsangano ny kadiny ny fomba fandoana vola",
  "modal.newTab": "{name} — hamakina amin'ny fonosana vaovao",

  /* ---------- Sommaire ---------- */
  "toc.label": "Loha-hevitra",
  "toc.aria": "Loha-hevitra ny torolalana",

  /* ---------- Page détail : méta & introuvable ---------- */
  "meta.title": "{name} : torolalana feno, fomba fiasa sy fomba hahazo vola | EarnZone",
  "meta.description":
    "Fantaro ahoana ny fiasan'i {name}, ahoana ny hanao kaonty, ny asa azo atao sy ny fankasitrahana.",
  "meta.notFoundTitle": "Tsy hita ny sehatra | EarnZone",
  "meta.notFoundDesc": "Tsy misy io sehatra io ao amin'ny EarnZone.",
  "nf.title": "Tsy hita ny sehatra",
  "nf.text": "Tsy misy io sehatra io na esorina efa.",
  "nf.back": "Hiverina any amin'ny fandraisana",

  /* ---------- Page détail : héros ---------- */
  "details.back": "Hiverina any amin'ny sehatra",
  "details.seeGuide": "Jereo ny torolalana A → Z",
  "details.verified": "Tsydikaina ny fampahalalana ny {date}",
  "details.coverage":
    "Tsy feno ny soratra ofisialy : io torolalana io dia misy izay voamarina tena izy kokoa ao amin'ny loharanon-kevitra ofisialy.",
  "details.finalTitle": "Vonona handrisika an'i {name} ?",
  "details.finalNote":
    "Mety hanova ny fononana, ny asa, ny fankasitrahana, ny fomba fandoana vola sy ny fetra. Marofo jerena foana ny fampahalalana ankehitriny ao amin'ny sehatra ofisialy. Tsy misy vola voamarina : miankina amin'ny asa azo atao, ny firenany, ny mombamombakao sy ny asanao.",

  /* ---------- Page détail : sections du guide ---------- */
  "s.presentation.label": "Fampahalambanasana",
  "s.presentation.title": "Inona ny {name} ?",
  "s.howWorks.label": "Fomba fiasa",
  "s.howWorks.title": "Ahoana ny fiasan'i {name} ?",
  "s.methods.label": "Fomba hahazo vola",
  "s.methods.title": "Ny fomba samihafa hahazo vola",
  "s.methods.intro":
    "Ny fomba rehetra ambanin'ity dia nosoratan'ny sehatra. Sokafy fehezanteny iray hahitana ny ampy sy ny torohevitra.",
  "s.features.label": "Fonksionalitry",
  "s.features.title": "Fonksionality lehibe",
  "s.signup.label": "Manao kaonty",
  "s.signup.title": "Ahoana ny hanao kaonty ?",
  "s.profile.label": "Amboary ny mombamombakao",
  "s.profile.title": "Amboary ny mombamombakao",
  "s.dashboard.label": "Ny tetibara",
  "s.dashboard.title": "Hijanona ny tetibara",
  "s.dashboard.intro": "Ny sasany tena hita ao amin'i {name} :",
  "s.guide.label": "Torolalana A → Z",
  "s.guide.title": "Torolalana feno ho an'ny fanombohana",
  "s.refused.label": "Asa voarara",
  "s.refused.title": "Nahoana no mety ho rara ny asa iray ?",
  "s.withdraw.label": "Fandoana",
  "s.withdraw.title": "Ahoana ny hanakafana ny fankasitrahanao ?",
  "s.withdraw.min": "Ambiny farany",
  "s.withdraw.delay": "Fotoana",
  "s.rules.label": "Zon-draharaha lehibe",
  "s.rules.title": "Zon-draharaha lehibe",
  "s.mistakes.label": "Diso ajerena",
  "s.mistakes.title": "Diso ajerena",
  "s.tips.label": "Hahazo be kokoa",
  "s.tips.title": "Hahazo be kokoa (tsy misy fanentanana)",
  "s.tips.note":
    "Tsy misy vola voamarina : ny hahazoanao dia miankina amin'ny asa azo atao, ny firenany, ny mombamombakao sy ny fetran'ny sehatra.",
  "s.referral.label": "Fampirantiana",
  "s.referral.title": "Ny tetikasan'ny fampirantiana",
  "s.faq.label": "Fanontaniana",
  "s.faq.title": "Fanontaniana matetika",
};
