import { about, site } from "../lib/content";

export function Footer() {
  return (
    <footer className="wrap footer">
      <span>{site.footer}</span>
      <span className="footer-links">
        {about.links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <a href="#top">{site.backToTop}</a>
      </span>
    </footer>
  );
}
