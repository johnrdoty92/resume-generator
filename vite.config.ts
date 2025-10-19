import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "unplugin-dts/vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({ bundleTypes: true, tsconfigPath: "./tsconfig.app.json" })],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "@johnrdoty92/resume-generator",
      fileName: "resume-generator",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["@react-pdf/renderer", "react", "react-dom"],
    },
  },
});
