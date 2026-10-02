import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams, useLocation } from "react-router-dom";
import { MotionConfig } from "motion/react";
import Home from "./pages/Home";
import PlatformDetails from "./pages/PlatformDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
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
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platforms/:id" element={<GuidePage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}
