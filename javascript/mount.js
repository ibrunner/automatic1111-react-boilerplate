// This file will be loaded by the WebUI to mount our React app
window.addEventListener("DOMContentLoaded", () => {
  const reactRoot = document.getElementById("react-root");
  if (reactRoot) {
    // The actual mounting will be handled by our built React application
    reactRoot.setAttribute("data-ready", "true");
  }
});
