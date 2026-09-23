import { useEffect, type MouseEvent } from "react";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { CaseStudyPage } from "./pages/CaseStudyPage";
import { caseStudies, site } from "./lib/content";
import { useHashRoute } from "./lib/useHashRoute";

// Changing the hash would route away from a case study page, so focus directly.
function skipToMain(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  document.getElementById("main")?.focus();
}

export function App() {
  const route = useHashRoute();
  const study = route.page === "case" ? caseStudies.find((c) => c.slug === route.slug) : undefined;
  const anchor = route.page === "home" ? route.anchor : "";

  // Arriving from a case study page, the home anchor only exists after render.
  useEffect(() => {
    if (study) {
      window.scrollTo(0, 0);
      document.getElementById("main-heading")?.focus({ preventScroll: true });
      return;
    }
    if (anchor) document.getElementById(anchor)?.scrollIntoView();
  }, [study, anchor]);

  return (
    <>
      <a className="skip-link" href="#main" onClick={skipToMain}>
        {site.skipLink}
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>{study ? <CaseStudyPage study={study} /> : <Home />}</main>
      <Footer />
    </>
  );
}
