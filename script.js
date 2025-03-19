let start = document.querySelector(".start");
let startButton1 = document.querySelector(".startButton1");
let startButton2 = document.querySelector(".startButton2");
let startButton3 = document.querySelector(".startButton3");
let restart = document.querySelector(".restart");
let page = document.querySelector(".fixed");

restart.addEventListener("click", function () {
  location.reload();
});

//Start page script
startButton1.addEventListener("click", function () {
  start.style.display = "none";
});
startButton2.addEventListener("click", function () {
  start.style.display = "none";
});
startButton3.addEventListener("click", function () {
  start.style.display = "none";
});
