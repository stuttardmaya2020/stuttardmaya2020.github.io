/// <reference types="vite/client" />

declare module "*.md" {
  const file: { data: Record<string, unknown>; html: string };
  export default file;
}
