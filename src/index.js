// JS Goes here - ES6 supported

import "./css/main.css";

  
// Theme switcher
const root = document.documentElement;
const themeBtns = document.querySelectorAll(".theme--switcher > button");
  
  themeBtns.forEach(btn => {
    btn.addEventListener("click", handleThemeUpdate);
  });
  
  function handleThemeUpdate(e) {
    switch (e.target.value) {
      case "default":
        root.classList.remove("theme--alt");
        root.classList.remove("theme--default");
        root.className += " theme--default";
        console.log("THEME = NORMAL");
        break;
      case "alt":
        root.classList.remove("theme--alt");
        root.classList.remove("theme--default");
        root.className += " theme--alt";
        console.log("THEME = DARK");
        break;
    }
  }
  