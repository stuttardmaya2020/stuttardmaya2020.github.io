import { CoverArt } from "../art/CoverArt";
import { Arrow } from "../components/Arrow";
import { CaseMeta } from "../components/CaseMeta";
import { caseStudies, site, type CaseStudy } from "../lib/content";
import { caseHref } from "../lib/useHashRoute";
import "../styles/case-study.css";

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  const next = caseStudies[caseStudies.indexOf(study) + 1];

  return (
    <article key={study.slug} className="wrap case-page">
      <a href="#work" className="arrow-link">
        <Arrow dir="left" /> {site.backToWork}
      </a>

      <header className="case-header">
        <h1 id="main-heading" className="case-heading" tabIndex={-1}>
          {study.heading}
        </h1>
        {/* The exhibit, hung: its mount and drawing, with the label beside it. */}
        <div className="case-hang">
          <div className="case-mount">
            <CoverArt motif={study.cover} />
          </div>
          <div className="wall-label case-label">
            <p className="wall-label-line">{study.wallMeta}</p>
            <p className="case-intro">{study.intro}</p>
          </div>
        </div>
      </header>

      <div className="case-layout">
        <CaseMeta study={study} />
        <div className="case-body">
          <div className="case-prose" dangerouslySetInnerHTML={{ __html: study.html }} />
          {study.takeaway && (
            <aside className="case-takeaway" aria-label={site.takeawayLabel}>
              <p className="case-takeaway-text">{study.takeaway}</p>
            </aside>
          )}
        </div>
      </div>

      <nav className="case-next" aria-label={site.nextExhibit}>
        <a href={next ? caseHref(next.slug) : "#work"} className="case-next-link">
          {next ? `${site.nextExhibit}: ${next.title}` : site.backToWork} <Arrow />
        </a>
      </nav>
    </article>
  );
}
