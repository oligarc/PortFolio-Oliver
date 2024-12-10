import "./styles/main.scss"; // Tu archivo SCSS
import Glide from "@glidejs/glide"; // Importar Glide.js
import "@glidejs/glide/dist/css/glide.core.min.css"; // Estilos de Glide.js

document.addEventListener("DOMContentLoaded", () => {
  const glide = new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 1,
    gap: 10,
    focusAt: "center",
    breakpoints: {
      800: {
        perView: 1,
      },
    },
  });

  glide.mount();
});
