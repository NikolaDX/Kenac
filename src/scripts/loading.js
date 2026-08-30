export function initLoadingScreen() {
  const loadingScreen = document.getElementById("loading-screen");

  if (!loadingScreen) return;

  window.addEventListener("load", () => {
    loadingScreen.classList.add("hidden");

    setTimeout(() => {
      loadingScreen.remove();
    }, 800);
  });
}