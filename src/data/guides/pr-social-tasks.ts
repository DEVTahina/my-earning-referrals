import type { GuideImage, PlatformGuide } from "./types";
import shot01 from "../../assets/images/guides/prsocial-01.webp";
import shot02 from "../../assets/images/guides/prsocial-02.webp";
import shot03 from "../../assets/images/guides/prsocial-03.webp";
import shot04 from "../../assets/images/guides/prsocial-04.webp";
import shot05 from "../../assets/images/guides/prsocial-05.webp";
import shot06 from "../../assets/images/guides/prsocial-06.webp";
import shot07 from "../../assets/images/guides/prsocial-07.webp";
import shot08 from "../../assets/images/guides/prsocial-08.webp";
import shot09 from "../../assets/images/guides/prsocial-09.webp";
import shot10 from "../../assets/images/guides/prsocial-10.webp";
import shot11 from "../../assets/images/guides/prsocial-11.webp";
import shot12 from "../../assets/images/guides/prsocial-12.webp";
import shot13 from "../../assets/images/guides/prsocial-13.webp";
import shot14 from "../../assets/images/guides/prsocial-14.webp";

/** Capture officielle du guide (pr.social/guide-shots), 390 × 760. */
const shot = (src: string, caption: string): GuideImage => ({
  src,
  caption,
  width: 390,
  height: 760,
});

/**
 * Guide PR.SOCIAL — calqué sur les pages officielles du site :
 * pr.social/guides (« How to earn on PR.SOCIAL », dernier changement 11/10/2026)
 * et pr.social/rules (« The rules of PR.SOCIAL », dernier changement 19/10/2026).
 * Les 8 étapes du guide officiel et les 10 sections des règles sont reprises
 * telles quelles, traduites en français.
 */
export const prSocialGuide: PlatformGuide = {
  whatIsIt:
    "PR.SOCIAL est une place d'échange de tâches sociales : vous êtes rémunéré pour des actions réelles sur les réseaux sociaux — likes, abonnements, commentaires. Le guide officiel du site décrit un parcours en 8 étapes : créer un compte, lier ses réseaux, choisir une tâche, l'effectuer et envoyer la preuve, suivre ses tâches, retirer ses gains, gagner plus, et savoir où aller quand quelque chose ne va pas.",
  howItWorks:
    "Les tâches ne s'ouvrent que pour les réseaux où vous avez lié un compte. La section Tasks liste tout ce qui est ouvert à vos comptes : chaque tâche indique le réseau, l'action et la récompense. On ouvre une tâche, on fait l'action depuis le compte choisi, on prend une capture qui montre l'action et son compte, on l'envoie avant l'expiration du délai. La plupart des tâches sont vérifiées en quelques minutes, certaines prennent plus de temps ; une personne vérifie chaque tâche Premium. La récompense arrive ensuite dans le Wallet, d'où l'on retire.",
  callouts: [
    {
      tone: "info",
      title: "Un e-mail confirmé est exigé pour le retrait",
      text: "Le guide officiel précise qu'il faut ouvrir le courrier envoyé à l'inscription et cliquer le lien : sans e-mail confirmé, le retrait est impossible.",
    },
    {
      tone: "warning",
      title: "Ne défaire aucune action après paiement",
      text: "Un follow, un like, un commentaire ou un repost qui est annulé après coup est une violation des règles : ce qui est fait n'est pas défait, même après la rémunération.",
    },
    {
      tone: "tip",
      title: "Telegram se lie par le bot, sans code dans le profil",
      text: "Pour les autres réseaux, le code donné par le site se place dans la description du profil, puis on clique « Vérifier mon profil ».",
    },
  ],
  features: [
    { title: "Retrait minimum 2 $ (USDT BEP20)", description: "Le Wallet accepte une demande dès 2 $ en USDT sur BEP20." },
    { title: "Retrait minimum 5 $ (TRX)", description: "Alternative TRX, à partir de 5 $." },
    { title: "Aucun frais", description: "Le site n'applique pas de frais de transfert (« Fee : None »)." },
    { title: "Retenue de sécurité 24 h", description: "Une demande passe par une attente de sécurité de 24 heures avant traitement." },
    { title: "Premium (jusqu'à 0,05 $ / tâche)", description: "Autres types de travaux payés jusqu'à 0,05 $ la tâche ; s'ouvre de lui-même après votre premier retrait." },
    { title: "Tools", description: "Tâches Telegram réalisées par les outils du site ; la section Tools montre ce qui est ouvert." },
  ],
  dashboard: [
    { title: "Tasks", description: "Tout ce qui est ouvert à vos comptes : réseau, action et récompense affichés pour chaque tâche, avec filtres par réseau et par type d'action." },
    {
      title: "My tasks",
      description:
        "Chaque tâche prise avec son état : en cours, en vérification, payée ou refusée. Un refus indique le motif et peut être renvoyé avec une nouvelle capture (5 tentatives tant qu'il en reste ; une tâche Premium refusée ne reprend pas).",
      image: shot(shot10, "Mes tâches"),
    },
    { title: "Wallet", description: "Votre solde, le bouton Withdraw et le suivi de chaque étape de la demande." },
    { title: "Referrals", description: "Votre lien d'invitation et les amis qu'ils vous amènent, avec la part qu'ils rapportent." },
    { title: "Tools", description: "Les tâches Telegram automatisées réellement ouvertes à l'instant." },
    { title: "Support", description: "Une personne répond dans le cabinet pour tout ce qui n'est ni dans la FAQ ni dans les règles." },
  ],
  earningMethods: [
    {
      title: "Tâches sociales (likes, follows, commentaires)",
      description:
        "Le cœur du site : on choisit une tâche ouverte à ses comptes, on fait l'action réellement et on envoie la preuve avant le délai.",
      image: shot(shot07, "Une tâche avant son démarrage"),
      steps: [
        {
          title: "Choisir la tâche",
          description:
            "Dans Tasks, filtrez par réseau et par type d'action, ouvrez la tâche et lancez-la : elle indique le réseau, l'action et la récompense.",
          image: shot(shot06, "La liste des tâches"),
        },
        {
          title: "Faire l'action",
          description:
            "Ouvrez le lien de la tâche et réalisez l'action depuis le compte avec lequel la tâche a été prise.",
          image: shot(shot08, "La tâche en cours"),
        },
        { title: "Prendre la preuve", description: "Une capture qui montre l'action ET votre compte, prise après l'action, non recadrée ni retouchée." },
        {
          title: "Envoyer avant le délai",
          description:
            "Revenez, joignez la capture et envoyez avant l'expiration du temps de la tâche. La plupart sont vérifiées en quelques minutes ; une personne vérifie chaque tâche Premium.",
          image: shot(shot09, "Envoyée pour vérification"),
        },
        { title: "Ne pas défaire l'action", description: "Un follow ou un like retiré après paiement est une violation des règles." },
      ],
    },
    {
      title: "Premium",
      description:
        "Autres types de travail payant jusqu'à 0,05 $ la tâche. Il s'ouvre de lui-même après votre premier retrait.",
    },
    {
      title: "Tools",
      description:
        "Tâches Telegram effectées pour vous par les outils du site : la section Tools affiche ce qui est ouvert. Travailler de façon automatisée n'est autorisé qu'avec ces outils.",
    },
    {
      title: "Parrainage (10 %)",
      description:
        "Invitez vos amis par votre lien et recevez 10 % de la récompense de chaque tâche qu'ils font accepter. La site paie cette part : rien n'est pris sur leur récompense.",
    },
  ],
  registrationSteps: [
    {
      step: 1,
      title: "Ouvrir la page d'inscription",
      description: "Renseignez un e-mail, un nom et un mot de passe.",
      image: shot(shot01, "Le formulaire d'inscription"),
    },
    { step: 2, title: "Lien d'invitation", description: "Si vous venez par le lien d'un ami, l'invitation est remplie automatiquement." },
    {
      step: 3,
      title: "Confirmer l'e-mail",
      description:
        "Ouvrez le courrier que le site envoie et cliquez le lien qu'il contient : l'e-mail est confirmé. C'est indispensable pour retirer de l'argent.",
      image: shot(shot02, "Le lien arrive par e-mail"),
    },
  ],
  profileSetup: [
    {
      step: 1,
      title: "Ouvrir Profile et choisir le réseau",
      description: "Les tâches ne s'ouvrent que pour les réseaux où un compte est lié.",
      image: shot(shot03, "Choisissez le réseau"),
    },
    { step: 2, title: "Saisir le nom ou le lien du compte", description: "Indiquez le compte social réel que vous utiliserez pour les tâches." },
    {
      step: 3,
      title: "Placer le code donné par le site",
      description:
        "En règle générale dans la description de votre profil : c'est ce code qui prouve que le compte vous appartient. Telegram se lie par le bot, sans code dans le profil.",
      image: shot(shot04, "Le code pour votre profil"),
    },
    {
      step: 4,
      title: "Cliquer « Vérifier mon profil »",
      description: "Le site contrôle le compte : une fois vérifié, les tâches du réseau s'ouvrent.",
      image: shot(shot05, "Le compte est associé"),
    },
    { step: 5, title: "Compte par compte", description: "Un seul compte par réseau (le second ne peut pas être lié), et un compte ne se délie qu'une fois par 30 jours — sans limite pour Telegram." },
  ],
  earningGuide: [
    { step: 1, title: "Créer le compte", description: "Page d'inscription : e-mail, nom, mot de passe ; l'invitation d'un ami se remplit seule. Confirmez l'e-mail par le lien reçu : c'est exigé pour le retrait." },
    { step: 2, title: "Lier ses comptes sociaux", description: "Profile → choisir le réseau → saisir le nom ou le lien du compte → placer le code du site dans la description du profil → « Vérifier mon profil ». Telegram passe par le bot, sans code." },
    { step: 3, title: "Choisir une tâche", description: "Tasks liste tout ce qui est ouvert à vos comptes, avec le réseau, l'action et la récompense. Filtrez par réseau et par type d'action, puis ouvrez la tâche et lancez-la." },
    { step: 4, title: "Faire la tâche et envoyer la preuve", description: "Ouvrez le lien de la tâche et faites l'action depuis le compte pris pour elle. Faites une capture montrant l'action et votre compte, revenez, joignez-la et envoyez avant la fin du délai. Vérification en quelques minutes pour la plupart, plus longue pour certaines ; une personne vérifie chaque tâche Premium." },
    { step: 5, title: "Suivre ses tâches", description: "My tasks montre chaque tâche avec son état : en cours, en vérification, payée ou refusée. Un refus dit pourquoi et peut être renvoyé avec une nouvelle capture, jusqu'à 5 tentatives tant qu'il en reste ; une tâche Premium refusée ne reprend pas." },
    { step: 6, title: "Retirer ses gains", description: "Wallet → Withdraw : choisissez la pièce, saisissez l'adresse, vérifiez le réseau (un transfert vers la mauvaise adresse ne revient pas), confirmez. Le Wallet affiche chaque étape de la demande." },
    { step: 7, title: "Gagner plus", description: "Premium s'ouvre tout seul après le premier retrait (jusqu'à 0,05 $ la tâche), Tools fait les tâches Telegram pour vous, et le parrainage verse 10 % des récompenses acceptées de vos amis." },
    { step: 8, title: "Si quelque chose ne va pas", description: "Tâche refusée, retrait en retard, compte restreint : les réponses sont dans la FAQ. Ce qui est permis ou non est dans les Règles. Pour tout autre cas, écrivez au Support : une personne répond dans le cabinet. Un réseau a bloqué votre compte : attendez le déliement gratuit, restaurez le compte, ou déliez-le tôt — la fenêtre du compte dans le profil affiche le montant." },
  ],
  refusedReasons: [
    "Preuve manquante, prise avant l'action, recadrée ou retouchée : la capture doit être la vôtre, montrant l'action et votre compte.",
    "Action non faite dans le délai : la tâche est retirée et retourne à la liste.",
    "Action défaite après paiement : un follow, un like, un commentaire ou un repost doit rester en place.",
    "Compte social appartenant à quelqu'un d'autre, acheté, vide ou fictif.",
    "Automatisation hors Tools : seuls les outils du site sont autorisés à travailler à votre place.",
    "Un retrait est refusé tant qu'aucun compte fonctionnel n'est lié pour un réseau où une partie du solde a été gagnée.",
  ],
  withdrawal: {
    description:
      "Ouvrez le Wallet et cliquez Withdraw. Choisissez la pièce et saisissez l'adresse de votre portefeuille, en vérifiant bien le réseau : un transfert vers une mauvaise adresse ne peut pas être retourné. Confirmez la demande : le Wallet affiche chaque étape qu'elle traverse. Aucun frais de transfert ; une attente de sécurité de 24 heures précède le traitement.",
    steps: [
      {
        title: "Ouvrir le Wallet",
        description: "Section Wallet du cabinet, puis bouton Withdraw.",
        image: shot(shot11, "Le portefeuille"),
      },
      { title: "Choisir la pièce", description: "USDT en BEP20 à partir de 2 $, ou TRX à partir de 5 $." },
      {
        title: "Saisir l'adresse et vérifier le réseau",
        description: "Contrôlez deux fois adresse et réseau : un transfert vers une mauvaise adresse est définitif.",
        image: shot(shot12, "Le formulaire de retrait"),
      },
      {
        title: "Confirmer la demande",
        description:
          "Le Wallet montre chaque étape de traitement, pendant l'attente de sécurité de 24 heures puis pendant le paiement.",
        image: shot(shot13, "Une demande en file d'attente"),
      },
      { title: "Un retrait peut être refusé", description: "Notamment si aucun compte fonctionnel n'est lié pour un réseau où une partie du solde a été gagnée, ou si les gains viennent d'une violation des règles." },
    ],
    methods: ["USDT (BEP20)", "TRX"],
    minimum: "USDT BEP20 : dès 2 $ — TRX : dès 5 $ (aucun frais)",
    processingTime: "Retenue de sécurité de 24 heures",
  },
  conditions: [
    "01 · Votre compte — 1.1 Une personne possède un seul compte PR.SOCIAL ; un second compte est une violation.",
    "01 · Votre compte — 1.2 Ne liez que vos propres comptes sociaux : réels, ouverts et en usage.",
    "01 · Votre compte — 1.3 Un compte par réseau : un second compte du même réseau ne peut pas être lié.",
    "01 · Votre compte — 1.4 Un compte d'un réseau se délie une fois par 30 jours ; Telegram n'a pas cette limite.",
    "01 · Votre compte — 1.5 En attente du déliement gratuit, un déliement anticipé est possible : ce que le compte a rapporté est retiré du solde, car ses actions quittent le site avec lui. Personne n'est obligé : le déliement gratuit s'ouvre à sa date.",
    "02 · Tâches — 2.1 Une tâche est faite par une réelle action du compte choisi pour elle.",
    "02 · Tâches — 2.2 Ce qui est fait n'est pas défait : follow, like, commentaire et repost restent en place après le paiement.",
    "02 · Tâches — 2.3 La preuve est réelle : votre propre capture, prise après la tâche, non recadrée ni modifiée.",
    "02 · Tâches — 2.4 Une tâche est faite dans le temps imparti ; non faite à temps, elle est retirée et retourne à la liste.",
    "03 · Non autorisé — Plus d'un compte PR.SOCIAL pour une même personne.",
    "03 · Non autorisé — Des comptes sociaux qui appartiennent à quelqu'un d'autre, achetés, vides ou fictifs.",
    "03 · Non autorisé — Des captures forgées ou qui ne sont pas les vôtres.",
    "03 · Non autorisé — Défaire une action après qu'elle est payée.",
    "03 · Non autorisé — Bots, scripts et tout programme autre que les outils de ce site.",
    "03 · Non autorisé — Inviter vos propres comptes avec votre lien de parrainage.",
    "03 · Non autorisé — Insultes et spam dans les messages au support.",
    "03 · Non autorisé — Tenter de contourner la vérification des tâches.",
    "04 · Tools — 4.1 Le travail ne peut être automatisé qu'avec les outils de la section Tools ; tout autre programme qui fait des tâches à votre place est interdit.",
    "05 · Surfing — 5.1 Une visite compte quand le site reste ouvert dans l'onglet Surfing pendant tout son temps et que la vérification est répondue.",
    "05 · Surfing — 5.2 Le Surfing fonctionne dans un seul onglet à la fois.",
    "05 · Surfing — 5.3 Les programmes et extensions qui ouvrent les sites ou répondent à la vérification à votre place sont interdits.",
    "06 · Avertissements et restriction — 6.1 Une violation vaut un avertissement ; votre profil montre pour quoi et jusqu'à quand il compte.",
    "06 · Avertissements et restriction — 6.2 Un avertissement compte 90 jours.",
    "06 · Avertissements et restriction — 6.3 À 4 avertissements comptés, le compte est restreint : tâches, retraits et liaison de comptes suspendus, solde conservé.",
    "06 · Avertissements et restriction — 6.4 Une violation grave — fabrication de tâches en masse, mensonge systématique — restreint le compte d'emblée.",
    "07 · Lever une restriction — 7.1 Une restriction peut être contestée auprès du Support.",
    "07 · Lever une restriction — 7.2 Levée sur appel : le solde du compte est mis à zéro et tous les comptes sociaux liés sont déliés. On recommence à zéro.",
    "07 · Lever une restriction — 7.3 Si la restriction venait de notre erreur, elle est levée et le solde est rendu.",
    "08 · Paiements — 8.1 Le minimum, les frais et le délai de vérification d'une demande sont affichés dans le Wallet avant l'envoi.",
    "08 · Paiements — 8.2 Une demande est refusée tant qu'aucun compte fonctionnel n'est lié pour un réseau où une partie du solde a été gagnée.",
    "08 · Paiements — 8.3 Ce qui est gagné en violation des règles n'est pas payé.",
    "09 · Parrainage — 9.1 Vous recevez une part de ce que gagnent les personnes invitées ; le site la paie, rien n'est prélevé sur leur récompense. La section Referrals affiche la part.",
    "09 · Parrainage — 9.2 Vos propres comptes ne peuvent pas être invités.",
    "09 · Parrainage — 9.3 Rien n'est ajouté pour le travail des comptes restreints.",
    "10 · Changements — 10.1 Les règles peuvent changer ; la date du dernier changement figure en haut de la page. En continuant après un changement, vous acceptez les nouvelles règles.",
  ],
  mistakes: [
    { title: "Oublier de confirmer son e-mail", text: "Sans le lien cliqué dans le courrier d'inscription, le retrait est impossible : c'est la première exigence du guide." },
    { title: "Partir avant la fin du délai", text: "Une tâche non faite à temps est retirée et retourne à la liste des tâches disponibles." },
    { title: "Envoyer une preuve incomplète", text: "La capture doit montrer l'action et votre compte, prise après l'action : une preuve recadrée ou hors sujet est refusée." },
    { title: "Retirer son like ou son follow", text: "Ce qui est fait n'est pas défait, même après paiement : l'annulation est une violation qui vaut un avertissement." },
    { title: "Délier un compte à tort", text: "Un réseau ne se délie qu'une fois par 30 jours, et un déliement anticipé retire du solde ce que le compte a rapporté : attendez le déliement gratuit quand c'est possible." },
  ],
  tips: [
    "Filtrez les tâches par réseau et par type d'action avant d'ouvrir : la liste Tasks affiche le réseau, l'action et la récompense de chaque tâche.",
    "Faites la tâche avec le compte pris pour elle, puis photographiez l'action et le compte dans la même capture.",
    "Une tâche refusée indique son motif : renvoyez-la avec une nouvelle capture tant qu'il reste des tentatives (5 au total).",
    "Le premier retrait débloque Premium, qui paie jusqu'à 0,05 $ la tâche.",
    "Gardez vos comptes liés actifs : un retrait peut être refusé si aucun compte fonctionnel n'est lié pour un réseau concerné par le solde.",
    "Pour les tâches Telegram, la section Tools travaille à votre place — c'est la seule automatisation autorisée.",
  ],
  referral: {
    description:
      "Invitez vos amis par votre lien et recevez 10 % de la récompense de chaque tâche qu'ils font accepter : le site paie cette part, rien n'est pris sur leur récompense. La section Referrals affiche votre lien, vos amis et la part en vigueur. Vos propres comptes ne peuvent pas être invités, et rien n'est ajouté pour le travail des comptes restreints.",
    image: shot(shot14, "Vos amis et leur apport"),
  },
  faq: [
    { question: "Qu'est-ce que PR.SOCIAL ?", answer: "Une place d'échange de tâches sociales : vous faites des likes, follows et commentaires réels sur les réseaux liés, vous envoyez la preuve, et la plateforme paie la récompense dans votre Wallet." },
    { question: "Comment lier mon compte Telegram ?", answer: "Par le bot du site : pour Telegram, aucun code n'est à placer dans la description du profil, contrairement aux autres réseaux." },
    { question: "Une de mes tâches a été refusée, que faire ?", answer: "My tasks affiche le motif du refus. Vous pouvez renvoyer la tâche avec une nouvelle capture, jusqu'à 5 tentatives tant qu'il en reste. Une tâche Premium refusée ne peut pas être reprise." },
    { question: "Quel est le minimum de retrait et quels sont les frais ?", answer: "USDT BEP20 à partir de 2 $, TRX à partir de 5 $, aucun frais, avec une retenue de sécurité de 24 heures. Le Wallet affiche ces conditions avant l'envoi de la demande." },
    { question: "Puis-je automatiser les tâches ?", answer: "Uniquement avec les outils de la section Tools (tâches Telegram). Bots, scripts et tout autre programme sont interdits par les règles." },
    { question: "Combien d'avertissements avant d'être restreint ?", answer: "Un avertissement compte 90 jours ; à 4 avertissements comptés, tâches, retraits et liaison de comptes sont suspendus (le solde est conservé). Une violation grave restreint le compte d'emblée." },
    { question: "Ma restriction peut-elle être levée ?", answer: "Oui, en contestant auprès du Support. Si elle est levée, le solde est mis à zéro et les comptes sociaux sont déliés ; si la restriction était une erreur du site, elle est levée et le solde est rendu." },
    { question: "Mon retrait est refusé ou en retard, où regarder ?", answer: "La FAQ d'abord (tâches refusées, retards, comptes restreints), les Règles pour ce qui est permis, puis le Support : une personne répond dans le cabinet. Un retrait est notamment refusé tant qu'aucun compte fonctionnel n'est lié pour un réseau où une partie du solde a été gagnée." },
  ],
  docCoverage: "full",
  officialSources: [
    { title: "Guide officiel PR.SOCIAL (How to earn)", url: "https://pr.social/guides" },
    { title: "Règles officielles PR.SOCIAL (Rules)", url: "https://pr.social/rules" },
    { title: "Site officiel PR.SOCIAL", url: "https://pr.social/" },
    { title: "Conditions d'utilisation PR.SOCIAL", url: "https://pr.social/terms" },
  ],
  lastVerified: "2026-10-26",
};
