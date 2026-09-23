import type { Plugin } from "vite";
import { Marked } from "marked";
import { parse as parseYaml } from "yaml";

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
const marked = new Marked({ gfm: true });

// Wide tables scroll inside a focusable region instead of the page.
function wrapTables(html: string, label: string): string {
  return html
    .replace(
      /<table>/g,
      `<div class="table-scroll" role="region" tabindex="0" aria-label="${label}"><table>`,
    )
    .replace(/<\/table>/g, "</table></div>");
}

/** Turns `*.md` imports into `{ data, html }`: YAML frontmatter plus rendered body. */
export function markdownContent(): Plugin {
  return {
    name: "markdown-content",
    enforce: "pre",
    transform(src, id) {
      if (!id.endsWith(".md")) return null;
      const match = FRONTMATTER.exec(src);
      const data = (match ? parseYaml(match[1] ?? "") : null) ?? {};
      const body = match ? src.slice(match[0].length) : src;
      const label = typeof data.tableLabel === "string" ? data.tableLabel : "Table";
      const html = wrapTables(marked.parse(body, { async: false }), label);
      return { code: `export default ${JSON.stringify({ data, html })};`, map: null };
    },
  };
}
