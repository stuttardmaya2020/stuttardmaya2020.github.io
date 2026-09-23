import { site } from "../lib/content";

export function Footer() {
  return (
    <footer className="wrap footer">
      <span>{site.name}</span>
      <span>{site.footer}</span>
    </footer>
  );
}
