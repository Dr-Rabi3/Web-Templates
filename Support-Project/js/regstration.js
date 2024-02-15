let ma = document.querySelector(".male");
let fe = document.querySelector(".female");

ma.onclick = function () {
  fe.style.cssText = "background-color: #fff;border-color:#ddd;color :#000;";
  ma.style.cssText = "background-color: rgb(242, 108, 79);  border-color: rgb(242, 108, 79);color :#fff;";
}
fe.onclick = function () {
  ma.style.cssText = "background-color: #fff;  border-color: #ddd;color :#000";
  fe.style.cssText = "background-color: rgb(242, 108, 79);  border-color: rgb(242, 108, 79);color :#fff;";
}

