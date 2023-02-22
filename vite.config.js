import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      public: `${path.resolve(__dirname, "./public/")}`,
      pages: path.resolve(__dirname, "./src/pages"),
      layouts: `${path.resolve(__dirname, "./src/layouts")}`,
      assets: `${path.resolve(__dirname, "./src/assets")}`,
      config: `${path.resolve(__dirname, "./src/config")}`,
      constants: `${path.resolve(__dirname, "./src/constants")}`,
      hooks: `${path.resolve(__dirname, "./src/hooks")}`,
      reduxs: `${path.resolve(__dirname, "./src/reduxs/")}`,
      routes: `${path.resolve(__dirname, "./src/routes")}`,
      utils: `${path.resolve(__dirname, "./src/utils")}`,
    },
  },
});
