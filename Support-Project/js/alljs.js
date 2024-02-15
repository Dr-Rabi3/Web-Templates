let col = document.querySelector(".top");
let inp = document.querySelector(".col");
let btn = document.querySelector(".btn");
let btn2 = document.querySelector(".btn2");
let por = document.querySelector(':root');
var mainColor = getComputedStyle(por).getPropertyValue('--home-color');
col.onclick = function () {
  if (inp.className === "col") {
    inp.style.cssText = "opacity: 1;";
    btn.style.cssText = "opacity: 1;";
    btn2.style.cssText = "opacity: 1;";
    inp.className = "coll";
  }else {
    inp.style.cssText = "opacity: 0;";
    btn.style.cssText = "opacity: 0;";
    btn2.style.cssText = "opacity: 0;";
    inp.className = "col";
  }
}
btn.onclick = function () {
  document.body.style.backgroundColor = inp.value;
  por.style.setProperty('--home-color', inp.value);
  inp.style.cssText = "z-index:-1;";
}

btn2.onclick = function () {
  document.body.style.backgroundColor = mainColor;
  por.style.setProperty('--home-color', mainColor);
}
