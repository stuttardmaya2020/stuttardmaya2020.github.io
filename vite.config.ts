import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { markdownContent } from "./markdownContent";

// User site with a custom domain (mayastutt.com), so it's served from the root.
export default defineConfig({
  base: "/",
  plugins: [markdownContent(), react()],
});
