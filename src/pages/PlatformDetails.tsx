import { useState, type ReactNode } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Ban,
  CalendarCheck,
  Coins,
  Info,
  LayoutDashboard,
  Lightbulb,
  ListChecks,
  ShieldAlert,
  Sparkles,
  TriangleAlert,
  UserRound,
} from "lucide-react";
import { platforms } from "../data/platforms";
import { guides } from "../data/guides";
import type { PlatformGuide } from "../data/guides";
import GuideToc from "../components/guide/GuideToc";
import GuideBlocks from "../components/guide/GuideBlocks";
import GuideAccordion from "../components/guide/GuideAccordion";
import GuideSteps from "../components/guide/GuideSteps";
import GuideFaqList from "../components/guide/GuideFaqList";
import GuideCallouts from "../components/guide/GuideCallouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { trackReferralClick } from "../lib/analytics";

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function PlatformDetails() {
  const { id } = useParams<{ id: string }>();
  const [logoError, setLogoError] = useState(false);

  const platform = platforms.find((p) => p.id === id);
  const guide = id ? guides[id] : undefined;

  usePageMeta(
    platform
      ? `${platform.name} : guide complet, fonctionnement et comment gagner | EarnZone`
      : "Plateforme introuvable | EarnZone",
    platform
      ? `Découvrez comment fonctionne ${platform.name}, comment créer un compte, effectuer les tâches disponibles et comprendre les récompenses.`
      : "Cette plateforme n'existe pas sur EarnZone."
  );

  if (!platform) {
    return (
      <main className="section">
        <div className="container gnotfound">
          <h1 className="section__title">Plateforme introuvable</h1>
          <p className="section__subtitle">
            Cette plateforme n'existe pas ou a été retirée.
          </p>
          <Link to="/" className="btn btn--primary">
            <ArrowLeft size={16} />
            Retour à l'accueil
          </Link>
        </div>
      </main>
    );
  }

  const hasLink = Boolean(platform.referralUrl);
  const showFallback = !platform.logo || logoError;

  const scrollTo = (target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };

  /* ---------- Sommaire dynamique : uniquement les sections réellement remplies ---------- */
  const buildSections = (g: PlatformGuide): { id: string; label: string; node: ReactNode }[] => {
    const sections: { id: string; label: string; node: ReactNode }[] = [];

    sections.push({
      id: "presentation",
      label: "Présentation",
      node: (
        <>
          <h2 className="gsection__title">Qu'est-ce que {platform.name} ?</h2>
          <p className="gsection__text">{g.whatIsIt}</p>
        </>
      ),
    });

    sections.push({
      id: "fonctionnement",
      label: "Fonctionnement",
      node: (
        <>
          <h2 className="gsection__title">Comment fonctionne {platform.name} ?</h2>
          <p className="gsection__text">{g.howItWorks}</p>
          {g.callouts && g.callouts.length > 0 && <GuideCallouts callouts={g.callouts} />}
        </>
      ),
    });

    if (g.earningMethods.length > 0) {
      sections.push({
        id: "methodes",
        label: "Méthodes pour gagner",
        node: (
          <>
            <h2 className="gsection__title">Les différentes façons de gagner</h2>
            <p className="gsection__intro">
              Chaque méthode ci-dessous est documentée par la plateforme. Ouvrez un
              bloc pour voir le détail et les étapes.
            </p>
            <GuideAccordion blocks={g.earningMethods} />
          </>
        ),
      });
    }

    if (g.features.length > 0) {
      sections.push({
        id: "fonctionnalites",
        label: "Fonctionnalités",
        node: (
          <>
            <h2 className="gsection__title">Fonctionnalités principales</h2>
            <GuideBlocks blocks={g.features} />
          </>
        ),
      });
    }

    if (g.registrationSteps.length > 0) {
      sections.push({
        id: "inscription",
        label: "Créer un compte",
        node: (
          <>
            <h2 className="gsection__title">Comment créer un compte ?</h2>
            <GuideSteps steps={g.registrationSteps} />
          </>
        ),
      });
    }

    if (g.profileSetup && g.profileSetup.length > 0) {
      sections.push({
        id: "profil",
        label: "Configurer son profil",
        node: (
          <>
            <h2 className="gsection__title">
              <UserRound size={18} aria-hidden="true" /> Configurer son profil
            </h2>
            <GuideSteps steps={g.profileSetup} />
          </>
        ),
      });
    }

    if (g.dashboard && g.dashboard.length > 0) {
      sections.push({
        id: "tableau-de-bord",
        label: "Le tableau de bord",
        node: (
          <>
            <h2 className="gsection__title">
              <LayoutDashboard size={18} aria-hidden="true" /> Découvrir le tableau de bord
            </h2>
            <p className="gsection__intro">
              Les sections réellement présentes sur {platform.name} :
            </p>
            <GuideBlocks blocks={g.dashboard} />
          </>
        ),
      });
    }

    if (g.earningGuide.length > 0) {
      sections.push({
        id: "guide",
        label: "Guide A → Z",
        node: (
          <>
            <h2 className="gsection__title">
              <ListChecks size={18} aria-hidden="true" /> Guide complet pour débuter
            </h2>
            <GuideSteps steps={g.earningGuide} />
          </>
        ),
      });
    }

    if (g.refusedReasons && g.refusedReasons.length > 0) {
      sections.push({
        id: "refus",
        label: "Tâche refusée",
        node: (
          <>
            <h2 className="gsection__title">
              <Ban size={18} aria-hidden="true" /> Pourquoi une tâche peut-elle être refusée ?
            </h2>
            <ul className="glist">
              {g.refusedReasons.map((r) => (
                <li key={r} className="glist__item">
                  <ShieldAlert size={14} aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
          </>
        ),
      });
    }

    sections.push({
      id: "retrait",
      label: "Retrait",
      node: (
        <>
          <h2 className="gsection__title">
            <Coins size={18} aria-hidden="true" /> Comment retirer ses récompenses ?
          </h2>
          <p className="gsection__text">{g.withdrawal.description}</p>
          {g.withdrawal.steps && g.withdrawal.steps.length > 0 && (
            <GuideSteps
              steps={g.withdrawal.steps.map((s, i) => ({
                step: i + 1,
                title: s.title,
                description: s.description,
              }))}
            />
          )}
          {g.withdrawal.methods && g.withdrawal.methods.length > 0 && (
            <div className="gchips">
              {g.withdrawal.methods.map((m) => (
                <span key={m} className="gchips__chip">
                  <Coins size={12} />
                  {m}
                </span>
              ))}
            </div>
          )}
          {(g.withdrawal.minimum || g.withdrawal.processingTime) && (
            <div className="gmeta">
              {g.withdrawal.minimum && (
                <p className="gmeta__line">
                  <strong>Seuil minimum :</strong> {g.withdrawal.minimum}
                </p>
              )}
              {g.withdrawal.processingTime && (
                <p className="gmeta__line">
                  <strong>Délai :</strong> {g.withdrawal.processingTime}
                </p>
              )}
            </div>
          )}
        </>
      ),
    });

    if (g.conditions && g.conditions.length > 0) {
      sections.push({
        id: "conditions",
        label: "Règles importantes",
        node: (
          <>
            <h2 className="gsection__title">
              <ShieldAlert size={18} aria-hidden="true" /> Règles importantes
            </h2>
            <ul className="glist">
              {g.conditions.map((c) => (
                <li key={c} className="glist__item">
                  <ShieldAlert size={14} aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </>
        ),
      });
    }

    if (g.mistakes && g.mistakes.length > 0) {
      sections.push({
        id: "erreurs",
        label: "Erreurs à éviter",
        node: (
          <>
            <h2 className="gsection__title">
              <TriangleAlert size={18} aria-hidden="true" /> Erreurs à éviter
            </h2>
            <div className="gblocks">
              {g.mistakes.map((m) => (
                <div key={m.title} className="gblocks__item gblocks__item--warn">
                  <h4 className="gblocks__title">{m.title}</h4>
                  <p className="gblocks__text">{m.text}</p>
                </div>
              ))}
            </div>
          </>
        ),
      });
    }

    if (g.tips && g.tips.length > 0) {
      sections.push({
        id: "conseils",
        label: "Comment gagner plus",
        node: (
          <>
            <h2 className="gsection__title">
              <Lightbulb size={18} aria-hidden="true" /> Comment gagner plus (sans promesse)
            </h2>
            <ul className="glist">
              {g.tips.map((t) => (
                <li key={t} className="glist__item glist__item--tip">
                  <Lightbulb size={14} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="gsection__note">
              Aucun montant n'est garanti : vos gains dépendent des tâches
              disponibles, de votre pays, de votre profil et des conditions de la
              plateforme.
            </p>
          </>
        ),
      });
    }

    if (g.referral) {
      sections.push({
        id: "parrainage",
        label: "Parrainage",
        node: (
          <>
            <h2 className="gsection__title">
              <Sparkles size={18} aria-hidden="true" /> Le programme de parrainage
            </h2>
            <p className="gsection__text">{g.referral.description}</p>
          </>
        ),
      });
    }

    if (g.faq && g.faq.length > 0) {
      sections.push({
        id: "faq",
        label: "FAQ",
        node: (
          <>
            <h2 className="gsection__title">Questions fréquentes</h2>
            <GuideFaqList items={g.faq} />
          </>
        ),
      });
    }

    return sections;
  };

  const sections = guide ? buildSections(guide) : [];
  const tocItems = sections.map((s) => ({ id: s.id, label: s.label }));

  const cta = hasLink ? (
    <motion.a
      href={platform.referralUrl ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn--primary btn--lg"
      onClick={() => trackReferralClick(platform, "platform_details", platform.referralUrl)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      Commencer à gagner
      <ArrowRight size={18} />
    </motion.a>
  ) : (
    <button type="button" className="btn btn--lg" disabled>
      Bientôt disponible
    </button>
  );

  return (
    <main>
      {/* ---------- HERO ---------- */}
      <section className="ghero">
        <div className="container ghero__inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="ghero__back">
              <ArrowLeft size={15} />
              Retour aux plateformes
            </Link>

            <div className="ghero__head">
              <div className="pcard__logo-box ghero__logo">
                {showFallback ? (
                  <span className="pcard__logo pcard__logo--placeholder" aria-hidden="true">
                    {platform.name.charAt(0)}
                  </span>
                ) : (
                  <img
                    src={platform.logo ?? undefined}
                    alt={`Logo ${platform.name}`}
                    className="pcard__logo-img"
                    onError={() => setLogoError(true)}
                  />
                )}
              </div>

              <div>
                <h1 className="ghero__title">{platform.name}</h1>
                {platform.subtitle && (
                  <p className="ghero__subtitle">{platform.subtitle}</p>
                )}
              </div>
            </div>

            <p className="ghero__desc">{guide?.whatIsIt ?? platform.description}</p>

            <div className="ghero__actions">
              {cta}
              {guide && (
                <button
                  type="button"
                  className="btn btn--ghost btn--lg"
                  onClick={() => scrollTo("guide")}
                >
                  <ListChecks size={18} />
                  Voir le guide A → Z
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- CONTENU ---------- */}
      {guide && (
        <section className="section gbody">
          <div className="container gbody__grid">
            <aside className="gbody__aside">
              <GuideToc items={tocItems} />
              {guide.lastVerified && (
                <p className="gverified">
                  <CalendarCheck size={13} aria-hidden="true" />
                  Informations vérifiées le {formatDate(guide.lastVerified)}
                </p>
              )}
            </aside>

            <div className="gbody__main">
              {sections.map((section) => (
                <article key={section.id} id={section.id} className="gsection">
                  {section.node}
                </article>
              ))}

              {guide.docCoverage === "partial" && (
                <p className="gcoverage">
                  <Info size={14} aria-hidden="true" />
                  Documentation officielle limitée : ce guide ne décrit que ce qui a
                  pu être vérifié sur les sources publiques de la plateforme.
                </p>
              )}

              <div className="gfinal">
                <h2 className="gfinal__title">Prêt à essayer {platform.name} ?</h2>
                {cta}
                <p className="gfinal__note">
                  <Info size={13} />
                  Les fonctionnalités, tâches, récompenses, méthodes de paiement et
                  conditions peuvent évoluer. Vérifiez toujours les informations
                  actuelles sur la plateforme officielle. Les gains ne sont pas
                  garantis : ils dépendent des tâches disponibles, de votre pays, de
                  votre profil et de votre activité.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Si aucun guide rédigé, proposer quand même le CTA */}
      {!guide && (
        <section className="section">
          <div className="container">
            <div className="gfinal">
              <h2 className="gfinal__title">Prêt à essayer {platform.name} ?</h2>
              {cta}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}