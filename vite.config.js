import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src", // La raíz del proyecto se establece en "src"
  build: {
    outDir: "../docs", // La salida de la construcción va a la carpeta "docs"
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"), // Página principal
      },
    },
  },
  base: "./", // Usamos rutas relativas para mayor compatibilidad en GitHub Pages
});
