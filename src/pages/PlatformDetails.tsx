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
import type { PlatformGuide } from "../data/guides";
import GuideToc from "../components/guide/GuideToc";
import GuideBlocks from "../components/guide/GuideBlocks";
import GuideAccordion from "../components/guide/GuideAccordion";
import GuideSteps from "../components/guide/GuideSteps";
import GuideFaqList from "../components/guide/GuideFaqList";
import GuideCallouts from "../components/guide/GuideCallouts";
import { usePageMeta } from "../hooks/usePageMeta";
import { trackReferralClick } from "../lib/analytics";
import { useLanguage } from "../hooks/useLanguage";
import { getGuide, localizePlatform } from "../i18n/localize";
import { formatDateLocalized } from "../i18n/types";

export default function PlatformDetails() {
  const { id } = useParams<{ id: string }>();
  const [logoError, setLogoError] = useState(false);
  const { lang, t } = useLanguage();

  const base = platforms.find((p) => p.id === id);
  const platform = base ? localizePlatform(base, lang) : undefined;
  const guide = getGuide(id, lang);

  usePageMeta(
    platform ? t("meta.title", { name: platform.name }) : t("meta.notFoundTitle"),
    platform ? t("meta.description", { name: platform.name }) : t("meta.notFoundDesc")
  );

  if (!platform) {
    return (
      <main className="section">
        <div className="container gnotfound">
          <h1 className="section__title">{t("nf.title")}</h1>
          <p className="section__subtitle">
            {t("nf.text")}
          </p>
          <Link to="/" className="btn btn--primary">
            <ArrowLeft size={16} />
            {t("nf.back")}
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
      label: t("s.presentation.label"),
      node: (
        <>
          <h2 className="gsection__title">
            {t("s.presentation.title", { name: platform.name })}
          </h2>
          <p className="gsection__text">{g.whatIsIt}</p>
        </>
      ),
    });

    sections.push({
      id: "fonctionnement",
      label: t("s.howWorks.label"),
      node: (
        <>
          <h2 className="gsection__title">
            {t("s.howWorks.title", { name: platform.name })}
          </h2>
          <p className="gsection__text">{g.howItWorks}</p>
          {g.callouts && g.callouts.length > 0 && <GuideCallouts callouts={g.callouts} />}
        </>
      ),
    });

    if (g.earningMethods.length > 0) {
      sections.push({
        id: "methodes",
        label: t("s.methods.label"),
        node: (
          <>
            <h2 className="gsection__title">{t("s.methods.title")}</h2>
            <p className="gsection__intro">
              {t("s.methods.intro")}
            </p>
            <GuideAccordion blocks={g.earningMethods} />
          </>
        ),
      });
    }

    if (g.features.length > 0) {
      sections.push({
        id: "fonctionnalites",
        label: t("s.features.label"),
        node: (
          <>
            <h2 className="gsection__title">{t("s.features.title")}</h2>
            <GuideBlocks blocks={g.features} />
          </>
        ),
      });
    }

    if (g.registrationSteps.length > 0) {
      sections.push({
        id: "inscription",
        label: t("s.signup.label"),
        node: (
          <>
            <h2 className="gsection__title">{t("s.signup.title")}</h2>
            <GuideSteps steps={g.registrationSteps} />
          </>
        ),
      });
    }

    if (g.profileSetup && g.profileSetup.length > 0) {
      sections.push({
        id: "profil",
        label: t("s.profile.label"),
        node: (
          <>
            <h2 className="gsection__title">
              <UserRound size={18} aria-hidden="true" /> {t("s.profile.title")}
            </h2>
            <GuideSteps steps={g.profileSetup} />
          </>
        ),
      });
    }

    if (g.dashboard && g.dashboard.length > 0) {
      sections.push({
        id: "tableau-de-bord",
        label: t("s.dashboard.label"),
        node: (
          <>
            <h2 className="gsection__title">
              <LayoutDashboard size={18} aria-hidden="true" /> {t("s.dashboard.title")}
            </h2>
            <p className="gsection__intro">
              {t("s.dashboard.intro", { name: platform.name })}
            </p>
            <GuideBlocks blocks={g.dashboard} />
          </>
        ),
      });
    }

    if (g.earningGuide.length > 0) {
      sections.push({
        id: "guide",
        label: t("s.guide.label"),
        node: (
          <>
            <h2 className="gsection__title">
              <ListChecks size={18} aria-hidden="true" /> {t("s.guide.title")}
            </h2>
            <GuideSteps steps={g.earningGuide} />
          </>
        ),
      });
    }

    if (g.refusedReasons && g.refusedReasons.length > 0) {
      sections.push({
        id: "refus",
        label: t("s.refused.label"),
        node: (
          <>
            <h2 className="gsection__title">
              <Ban size={18} aria-hidden="true" /> {t("s.refused.title")}
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
      label: t("s.withdraw.label"),
      node: (
        <>
          <h2 className="gsection__title">
            <Coins size={18} aria-hidden="true" /> {t("s.withdraw.title")}
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
                  <strong>{t("s.withdraw.min")} :</strong> {g.withdrawal.minimum}
                </p>
              )}
              {g.withdrawal.processingTime && (
                <p className="gmeta__line">
                  <strong>{t("s.withdraw.delay")} :</strong> {g.withdrawal.processingTime}
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
        label: t("s.rules.label"),
        node: (
          <>
            <h2 className="gsection__title">
              <ShieldAlert size={18} aria-hidden="true" /> {t("s.rules.title")}
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
        label: t("s.mistakes.label"),
        node: (
          <>
            <h2 className="gsection__title">
              <TriangleAlert size={18} aria-hidden="true" /> {t("s.mistakes.title")}
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
        label: t("s.tips.label"),
        node: (
          <>
            <h2 className="gsection__title">
              <Lightbulb size={18} aria-hidden="true" /> {t("s.tips.title")}
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
              {t("s.tips.note")}
            </p>
          </>
        ),
      });
    }

    if (g.referral) {
      sections.push({
        id: "parrainage",
        label: t("s.referral.label"),
        node: (
          <>
            <h2 className="gsection__title">
              <Sparkles size={18} aria-hidden="true" /> {t("s.referral.title")}
            </h2>
            <p className="gsection__text">{g.referral.description}</p>
          </>
        ),
      });
    }

    if (g.faq && g.faq.length > 0) {
      sections.push({
        id: "faq",
        label: t("s.faq.label"),
        node: (
          <>
            <h2 className="gsection__title">{t("s.faq.title")}</h2>
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
      {t("cta.start")}
      <ArrowRight size={18} />
    </motion.a>
  ) : (
    <button type="button" className="btn btn--lg" disabled>
      {t("cta.soon")}
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
              {t("details.back")}
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
                  {t("details.seeGuide")}
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
                  {t("details.verified", {
                    date: formatDateLocalized(guide.lastVerified, lang),
                  })}
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
                  {t("details.coverage")}
                </p>
              )}

              <div className="gfinal">
                <h2 className="gfinal__title">
                  {t("details.finalTitle", { name: platform.name })}
                </h2>
                {cta}
                <p className="gfinal__note">
                  <Info size={13} />
                  {t("details.finalNote")}
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
              <h2 className="gfinal__title">
                {t("details.finalTitle", { name: platform.name })}
              </h2>
              {cta}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}