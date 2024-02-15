document.querySelector(".show-all").addEventListener("click", () => {
  if (document.querySelector("#more-image").classList.contains("hide")) {
    document.querySelector("#more-image").classList.add("image-carts");
    document.querySelector("#more-image").classList.remove("hide");
    document.querySelector(".show-all").innerHTML = "SEE LESS";
  } else {
    document.querySelector("#more-image").classList.remove("image-carts");
    document.querySelector("#more-image").classList.add("hide");
    document.querySelector(".show-all").innerHTML = "SEE ALL";
  }
});
