import { site } from "../lib/content";
import "../styles/nav.css";

const ICONS = {
  work: (
    <>
      <rect x="2" y="4" width="12" height="9" rx="1.5" />
      <path d="M6 4V2.5h4V4" />
    </>
  ),
  play: (
    <>
      <path d="M8 2a6 6 0 1 0 0 12c1 0 1.2-.8.8-1.4-.5-.7 0-1.6.9-1.6H11a3 3 0 0 0 3-3C14 4.6 11.3 2 8 2Z" />
      <circle cx="5.3" cy="7" r=".5" />
      <circle cx="8" cy="5" r=".5" />
      <circle cx="10.8" cy="6.6" r=".5" />
    </>
  ),
  about: (
    <>
      <circle cx="8" cy="5.5" r="2.8" />
      <path d="M2.8 14c.6-2.7 2.7-4.2 5.2-4.2s4.6 1.5 5.2 4.2" />
    </>
  ),
};

/** Pill navigation. Work is the filled pill: it is what most visitors came for. */
export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="pill nav-logo">
          {site.logo}
        </a>
        <nav aria-label={site.navLabel}>
          <ul className="nav-links">
            {site.nav.map((link, i) => (
              <li key={link.href}>
                <a href={link.href} className={i === 0 ? "pill pill--on" : "pill"}>
                  <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false" className="pill-icon">
                    {ICONS[link.icon]}
                  </svg>
                  <span className="nav-label">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
