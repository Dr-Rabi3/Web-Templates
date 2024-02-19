let root = document.querySelector(":root");
const darkMode = function darkMode(onload) {
  let icon = document.querySelector(".icon-dark");
  let isDark = icon.getAttribute("data-dark");
  if (onload && onload.onload === true) {
    isDark = localStorage.Dark == "moon" ? "false" : "true";
  } else localStorage.Dark = isDark == "false" ? "moon" : "sun";
  icon.classList.add("animated");
  if (isDark == "false") {
    document.querySelector(".icon_container").classList.add("moon_mode");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    icon.style.color = "#ffffff";
    document.querySelector(".icon_container").style.backgroundColor = "#241e38";
    document.querySelector(".lightMode").style.backgroundColor = "#242424";
    root.style.setProperty("--dark-color", "#ffffff");
    root.style.setProperty("--white", "#241e38");
    root.style.setProperty("--black-light-color", "#f0eef6");
    root.style.setProperty("--light-color", "#242424");
  } else {
    document.querySelector(".icon_container").classList.remove("moon_mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    icon.style.color = "#FFDE59";
    document.querySelector(".icon_container").style.backgroundColor = "#ffffff";
    document.querySelector(".lightMode").style.backgroundColor = "#ebebeb";
    root.style.setProperty("--dark-color", "#241e38");
    root.style.setProperty("--white", "#f0eef6");
    root.style.setProperty("--black-light-color", "#2d2d2dd1 ");
    root.style.setProperty("--light-color", "#ddd");
  }
  icon.setAttribute("data-dark", isDark === "true" ? "false" : "true");
  setTimeout(() => {
    icon.classList.remove("animated");
  }, 500);
  setTimeout(() => {
    icon.classList.remove("animated");
  }, 500);
};
window.onload = darkMode({ onload: true });
document.querySelector(".icon_container").onclick = darkMode;
