let start = document.querySelector(".start");
let startButton1 = document.querySelector(".startButton1");
let startButton2 = document.querySelector(".startButton2");
let startButton3 = document.querySelector(".startButton3");
let restart = document.querySelector(".restart");
let title = document.querySelector(".title");

let usStart = document.querySelector(".usBox1");
let usOption1 = document.querySelector(".us1");
let usOption2 = document.querySelector(".us2");
let usOption3 = document.querySelector(".us3");
let usOption4 = document.querySelector(".us4");
let newyorkStart = document.querySelector(".usBox2");
let floridaStart = document.querySelector(".usBox3");
let nyOption1 = document.querySelector(".ny1");
let usBox = document.querySelector(".usBoxContent");


let japanStart = document.querySelector(".japanBox1");
let jpOption1 = document.querySelector(".jp1");
let jpOption2 = document.querySelector(".jp2");
let jpOption3 = document.querySelector(".jp3");
let tokyoStart = document.querySelector(".japanBox2");
let osakaStart = document.querySelector(".japanBox3");
let hokkaidoStart = document.querySelector(".japanBox4");


let usStart = document.querySelector(".usBox1");
let usOption1 = document.querySelector(".us1");
let usOption2 = document.querySelector(".us2");
let usOption3 = document.querySelector(".us3");
let usOption4 = document.querySelector(".us4");
let newyorkStart = document.querySelector(".usbox2");
let floridaStart = document.querySelector(".usbox3");
let losangelesStart = document.querySelector(".usbox4");
let lasvegasStart = document.querySelector(".usbox5");
let nyOption1 = document.querySelector(".ny1");
let nyOption2 = document.querySelector(".ny2");
let nyOption3 = document.querySelector(".ny3");
let nyOption4 = document.querySelector(".ny4");
let flOption1 = document.querySelector(".fl1");
let flOption2 = document.querySelector(".fl2");
let flOption3 = document.querySelector(".fl3");
let flOption4 = document.querySelector(".fl4");
let laOption1 = document.querySelector(".la1");
let laOption2 = document.querySelector(".la2");
let laOption3 = document.querySelector(".la3");
let laOption4 = document.querySelector(".la4");
let lvOption1 = document.querySelector(".lv1");
let lvOption2 = document.querySelector(".lv2");
let lvOption3 = document.querySelector(".lv3");
let lvOption4 = document.querySelector(".lv4");


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
let animateAkiEnd1 = document.querySelector(".animateAkiEnd1");
let animateAkiEnd2 = document.querySelector(".animateAkiEnd2");
let supeTaterAki = document.querySelector(".supeTaterAki");
let supeTaterAkiEnd1 = document.querySelector(".supeTaterAkiEnd1");
let supeTaterAkiEnd2 = document.querySelector(".supeTaterAkiEnd2");
let taterOption1 = document.querySelector(".tater1");
let taterOption2 = document.querySelector(".tater2");
let shrineAki = document.querySelector(".shrineAki");
let shrineAkiEnd1 = document.querySelector(".shrineAkiEnd1");
let shrineAkiEnd2 = document.querySelector(".shrineAkiEnd2");
let shrineOption1 = document.querySelector(".shrine1");
let shrineOption2 = document.querySelector(".shrine2");

let shibuya = document.querySelector(".shibuya");
let shbyaOption1 = document.querySelector(".shbya1");
let shbyaOption2 = document.querySelector(".shbya2");
let shbyaOption3 = document.querySelector(".shbya3");
let museumShbya = document.querySelector(".museumShbya");
let museumOption1 = document.querySelector(".museum1");
let museumOption2 = document.querySelector(".museum2");
let museumShbyaEnd1 = document.querySelector(".museumShbyaEnd1");
let museumShbyaEnd2 = document.querySelector(".museumShbyaEnd2");
let shrineShbya = document.querySelector(".shrineShbya");
let shrineShbyaEnd1 = document.querySelector(".shrineShbyaEnd1");
let shrineShbyaEnd2 = document.querySelector(".shrineShbyaEnd2");
let shrineShbyaOption1 = document.querySelector(".shrineShbya1");
let shrineShbyaOption2 = document.querySelector(".shrineShbya2");
let parkShbyaEnd1 = document.querySelector(".parkShbyaEnd");

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
  title.innerHTML = "This Hotel is Near Shibuya, What Would You Like To Do?";
  shibuya.style.display = "flex";
});
tkyOption4.addEventListener("click", function () {
  tokyoStart.style.display = "none";
  title.innerHTML = "This Hotel is Near Shibuya, What Would You Like To Do?";
  shibuya.style.display = "flex";
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
  title.innerHTML =
    "There's tons of anime merch to choose from, and as fun as exploring this is, it's all costing an arm and a leg.";
  animateAki.style.display = "flex";
});
akiOption2.addEventListener("click", function () {
  akihabara.style.display = "none";
  title.innerHTML =
    "You See Two Companies Whose Games You Love But Can only Pick One, Which Do You Choose?";
  supeTaterAki.style.display = "flex";
});
akiOption3.addEventListener("click", function () {
  akihabara.style.display = "none";
  title.innerHTML = "You Happen Upon a Shrine, What Do You Do?";
  shrineAki.style.display = "flex";
});
aniOption1.addEventListener("click", function () {
  animateAki.style.display = "none";
  title.innerHTML = "";
  animateAkiEnd1.style.display = "flex";
});
aniOption2.addEventListener("click", function () {
  animateAki.style.display = "none";
  title.innerHTML = "";
  animateAkiEnd2.style.display = "flex";
});
taterOption1.addEventListener("click", function () {
  supeTaterAki.style.display = "none";
  title.innerHTML = "";
  supeTaterAkiEnd1.style.display = "flex";
});
//US
usOption1.addEventListener("click", function () {
  usStart.style.display = "none";
  title.innerHTML = "Where Would You Like To Stay On This Trip?";
  newyorkStart.style.display = "flex";
});
usOption2.addEventListener("click", function () {
  usStart.style.display = "none";
  title.innerHTML = "Where Would You Like To Stay On This Trip?";
  floridaStart.style.display = "flex";
});
usOption3.addEventListener("click", function () {
  usStart.style.display = "none";
  title.innerHTML = "Where Would You Like To Stay On This Trip?";
  losangelesStart.style.display = "flex";
});
usOption4.addEventListener("click", function () {
  usStart.style.display = "none";
  title.innerHTML = "Where Would You Like To Stay On This Trip?";
  lasvegasStart.style.display = "flex";
});
nyOption1.addEventListener("click", function () {
  newyorkStart.style.display = "none";
  title.innerHTML = "Test";
});
});
