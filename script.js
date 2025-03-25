let start = document.querySelector(".start");
let startButton1 = document.querySelector(".startButton1");
let startButton2 = document.querySelector(".startButton2");
let startButton3 = document.querySelector(".startButton3");
let restart = document.querySelector(".restart");
let title = document.querySelector(".title");
let japanStart = document.querySelector(".japanBox1");
let jpOption1 = document.querySelector(".jp1");
let jpOption2 = document.querySelector(".jp2");
let jpOption3 = document.querySelector(".jp3");
let tokyoStart = document.querySelector(".japanBox2");
let osakaStart = document.querySelector(".japanBox3");
let hokkaidoStart = document.querySelector(".japanBox4");
let usStart = document.querySelector(".usBox1");
let usBox = document.querySelector(".usBoxContent");
let tkyOption1 = document.querySelector(".tky1");
let tkyOption2 = document.querySelector(".tky2");
let tkyOption3 = document.querySelector(".tky3");
let tkyOption4 = document.querySelector(".tky4");
let oskOption1 = document.querySelector(".osk1");
let oskOption2 = document.querySelector(".osk2");
let oskOption3 = document.querySelector(".osk3");
let oskOption4 = document.querySelector(".osk4");
let hkdoOption1 = document.querySelector(".hkdo1");
let hkdoOption2 = document.querySelector(".hkdo2");
let hkdoOption3 = document.querySelector(".hkdo3");
let hkdoOption4 = document.querySelector(".hkdo4");
let akihabara = document.querySelector(".akihabara");
let akiOption1 = document.querySelector(".aki1");
let akiOption2 = document.querySelector(".aki2");
let akiOption3 = document.querySelector(".aki3");
let animateAki = document.querySelector(".animateAki");
let aniOption1 = document.querySelector(".ani1");
let aniOption2 = document.querySelector(".ani2");
let animateAkiEnd = document.querySelector(".animateAkiEnd");

//Restart Button
restart.addEventListener("click", function () {
  location.reload();
});

//Start page script
startButton1.addEventListener("click", function () {
  start.style.display = "none";
  title.innerHTML = "Where Would You Like To Go?";
  usStart.style.display = "flex";
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
  title.innerHTML = "Where Would You Like To Stay On This Trip?";
  tokyoStart.style.display = "flex";
});
jpOption2.addEventListener("click", function () {
  japanStart.style.display = "none";
  title.innerHTML = "Where Would You Like To Stay On This Trip?";
  osakaStart.style.display = "flex";
});
jpOption3.addEventListener("click", function () {
  japanStart.style.display = "none";
  title.innerHTML = "Where Would You Like To Stay On This Trip?";
  hokkaidoStart.style.display = "flex";
});
tkyOption1.addEventListener("click", function () {
  tokyoStart.style.display = "none";
  title.innerHTML = "This Hotel is Near Akihabara, What Would You Like To Do?";
  akihabara.style.display = "flex";
});
tkyOption2.addEventListener("click", function () {
  tokyoStart.style.display = "none";
  title.innerHTML = "This Hotel is Near Akihabara, What Would You Like To Do?";
  akihabara.style.display = "flex";
});
tkyOption3.addEventListener("click", function () {
  tokyoStart.style.display = "none";
  title.innerHTML = "Test";
});
tkyOption4.addEventListener("click", function () {
  tokyoStart.style.display = "none";
  title.innerHTML = "Test";
});
oskOption1.addEventListener("click", function () {
  osakaStart.style.display = "none";
  title.innerHTML = "Test";
});
oskOption2.addEventListener("click", function () {
  osakaStart.style.display = "none";
  title.innerHTML = "Test";
});
oskOption3.addEventListener("click", function () {
  osakaStart.style.display = "none";
  title.innerHTML = "Test";
});
oskOption4.addEventListener("click", function () {
  osakaStart.style.display = "none";
  title.innerHTML = "Test";
});
hkdoOption1.addEventListener("click", function () {
  hokkaidoStart.style.display = "none";
  title.innerHTML = "Test";
});
hkdoOption2.addEventListener("click", function () {
  hokkaidoStart.style.display = "none";
  title.innerHTML = "Test";
});
hkdoOption3.addEventListener("click", function () {
  hokkaidoStart.style.display = "none";
  title.innerHTML = "Test";
});
hkdoOption4.addEventListener("click", function () {
  hokkaidoStart.style.display = "none";
  title.innerHTML = "Test";
});
akiOption1.addEventListener("click", function () {
  akihabara.style.display = "none";
  title.innerHTML = "There's tons of anime merch to choose from, and as fun as exploring this is, it's all costing an arm and a leg.";
  animateAki.style.display = "flex";
});
akiOption2.addEventListener("click", function () {
  akihabara.style.display = "none";
  title.innerHTML = "Test";
});
akiOption3.addEventListener("click", function () {
  akihabara.style.display = "none";
  title.innerHTML = "Test";
});
aniOption1.addEventListener("click", function () {
  animateAki.style.display = "none";
  title.innerHTML = "";
  animateAkiEnd.style.display = "flex";
});
aniOption2.addEventListener("click", function () {
  animateAki.style.display = "none";
  title.innerHTML = "Test";
});
//US
