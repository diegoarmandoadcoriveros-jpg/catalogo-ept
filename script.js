window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  const audio = document.getElementById("musica-fondo");

  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";

    if (audio) {
      audio.volume = 0.5;
      audio.play().catch(() => console.log("El usuario debe interactuar para activar el audio."));
    }
  }, 6500);
});
