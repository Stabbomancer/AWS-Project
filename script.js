let start = document.querySelector(".start");
let startButton1 = document.querySelector(".startButton1");
let startButton2 = document.querySelector(".startButton2");
let startButton3 = document.querySelector(".startButton3");
let restart = document.querySelector(".restart");
let title = document.querySelector(".title");
let japanStart = document.querySelector(".japanBox1");
let jpOption1 = document.querySelector(".jp1");

restart.addEventListener("click", function () {
  location.reload();
});

//Start page script
startButton1.addEventListener("click", function () {
  start.style.display = "none";
  title.innerHTML = "Where Would You Like To Go?";
});
startButton2.addEventListener("click", function () {
  start.style.display = "none";
  title.innerHTML = "Where Would You Like To Go?";
});
startButton3.addEventListener("click", function () {
  title.innerHTML = "Where Would You Like To Go?";
  start.style.display = "none";
  japanStart.style.display = "flex";
});
//Japan
jpOption1.addEventListener("click", function () {
  japanStart.style.display = "none";
});
