window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");
  if (splash) {
    splash.style.opacity = "0";
    setTimeout(() => splash.style.display = "none", 500);
  }
});
