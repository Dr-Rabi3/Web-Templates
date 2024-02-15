let ser = document.querySelector(".saerch");
let ser2 = document.querySelector(".ser2");
let sl = ser2.styleSheet;
ser.onclick = function () {
  if (ser2.attributes[2].value === "hadden") {
    ser2.style.cssText = "display : block";
    ser2.attributes[2].value = "show";
  }
  else {
    ser2.style.cssText = "display : none";
    ser2.attributes[2].value = "hadden";
  }
}