// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

// Theme switcher

const root = document.documentElement;
const themeBtns = document.querySelectorAll(".toolbar > button");

themeBtns.forEach(btn => {
  btn.addEventListener("click", handleThemeUpdate);
});

function handleThemeUpdate(e) {
  switch (e.target.value) {
    case "default":
      root.classList.remove("theme--alt");
      root.className += " theme--default";
      console.log("THEME = NORMAL");
      break;
    case "alt":
      root.classList.remove("theme--default");
      root.className += " theme--alt";
      console.log("THEME = DARK");
      break;
  }
}
