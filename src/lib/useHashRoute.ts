import { useEffect, useState } from "react";

export type Route = { page: "home"; anchor: string } | { page: "case"; slug: string };

const CASE_PREFIX = "#/work/";

function parse(hash: string): Route {
  if (hash.startsWith(CASE_PREFIX)) return { page: "case", slug: hash.slice(CASE_PREFIX.length) };
  return { page: "home", anchor: hash.slice(1) };
}

export const caseHref = (slug: string) => `${CASE_PREFIX}${slug}`;

/** Hash-based routing: works on GitHub Pages with no server rewrites. */
export function useHashRoute(): Route {
  const [route, setRoute] = useState(() => parse(window.location.hash));

  useEffect(() => {
    const onChange = () => setRoute(parse(window.location.hash));
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}
