import { site } from "../lib/content";
import "../styles/nav.css";

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="nav-name" aria-label={site.name}>
          <span className="nav-name-full">{site.name}</span>
          <span className="nav-name-short" aria-hidden="true">
            {site.shortName}
          </span>
        </a>
        <nav aria-label={site.navLabel}>
          <ul className="nav-links">
            {site.nav.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
