// app.config.ts
import { defineConfig } from "@tanstack/start/config";
import { devtools } from "@tanstack/devtools-vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
var app_config_default = defineConfig({
  deploymentTarget: "cloudflare-workers",
  vite: {
    plugins: [
      devtools(),
      tsconfigPaths({ projects: ["./tsconfig.json"] }),
      tailwindcss(),
      cloudflare()
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (id.includes("lucide-react")) {
                return "lucide-vendor";
              }
              if (id.includes("sanity") || id.includes("@sanity/")) {
                return "sanity-vendor";
              }
              if (id.includes("react-slick") || id.includes("slick-carousel")) {
                return "carousel-vendor";
              }
            }
          }
        }
      },
      reportCompressedSize: true,
      chunkSizeWarningLimit: 1e3
    }
  }
});
export {
  app_config_default as default
};
