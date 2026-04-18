// app.config.ts
import { defineConfig } from "@tanstack/start/config";
import tsconfigPaths from "vite-tsconfig-paths";
var app_config_default = defineConfig({
  deploymentTarget: "cloudflare-workers",
  vite: {
    plugins: [
      tsconfigPaths({
        projects: ["./tsconfig.json"]
      })
    ]
  }
});
export {
  app_config_default as default
};
