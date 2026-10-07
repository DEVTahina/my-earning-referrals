import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams, useLocation } from "react-router-dom";
import { MotionConfig } from "motion/react";
import Home from "./pages/Home";
import PlatformDetails from "./pages/PlatformDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { LanguageProvider } from "./hooks/useLanguage";
import { trackPageView } from "./lib/analytics";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

/**
 * Analytics : un seul page_view par navigation (SPA).
 * Placé APRÈS <Routes> pour que le title de la page (SEO) soit déjà à jour.
 * Les query parameters (UTM) sont conservés dans l'URL mesurée.
 */
function AnalyticsRouteTracker() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    trackPageView(`${pathname}${search}`);
  }, [pathname, search]);
  return null;
}

function GuidePage() {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <Header />
      <PlatformDetails key={id} />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platforms/:id" element={<GuidePage />} />
          <Route path="*" element={<Home />} />
        </Routes>
          <AnalyticsRouteTracker />
        </BrowserRouter>
      </LanguageProvider>
    </MotionConfig>
  );
}
