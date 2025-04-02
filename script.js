//Start
let start = document.querySelector(".start");
let startButton1 = document.querySelector(".startButton1");
let startButton2 = document.querySelector(".startButton2");
let startButton3 = document.querySelector(".startButton3");
let restart = document.querySelector(".restart");
let title = document.querySelector(".title");

//United Satets
//USCities
let usStart = document.querySelector(".usBox1");
let usOption1 = document.querySelector(".us1");
let usOption2 = document.querySelector(".us2");
let usOption3 = document.querySelector(".us3");
let usOption4 = document.querySelector(".us4");
//USNewYork
let newyorkStart = document.querySelector(".usBox2");
let nyOption1 = document.querySelector(".ny1");
let nyOption2 = document.querySelector(".ny2");
let nyOption3 = document.querySelector(".ny3");
let nyOption4 = document.querySelector(".ny4");
//USFlorida
let floridaStart = document.querySelector(".usBox3");
let flOption1 = document.querySelector(".fl1");
let flOption2 = document.querySelector(".fl2");
let flOption3 = document.querySelector(".fl3");
let flOption4 = document.querySelector(".fl4");
//USLosAngeles
let losangelesStart = document.querySelector(".usBox4");
let laOption1 = document.querySelector(".la1");
let laOption2 = document.querySelector(".la2");
let laOption3 = document.querySelector(".la3");
let laOption4 = document.querySelector(".la4");
//USLasVegas
let lasvegasStart = document.querySelector(".usBox5");
let lvOption1 = document.querySelector(".lv1");
let lvOption2 = document.querySelector(".lv2");
let lvOption3 = document.querySelector(".lv3");
let lvOption4 = document.querySelector(".lv4");

//New York || Pendry Manhattan West
let pendrywest = document.querySelector(".pmw");
let pmwOption1 = document.querySelector(".pmw1");
let pmwOption2 = document.querySelector(".pmw2");
//New York || Pendry Manhattan West || Union Square
let unionsquare = document.querySelector(".unionsquare");
let unionOption1 = document.querySelector(".union1");
let unionOption2 = document.querySelector(".union2");
let unionEnd1 = document.querySelector(".unionend1");
let unionEnd2 = document.querySelector(".unionend2");
//New York || Pendry Manhattan West || Times Square
let timessquare = document.querySelector(".timessquare");
let timesOption1 = document.querySelector(".times1");
let timesOption2 = document.querySelector(".times2");
let timesEnd1 = document.querySelector(".timesend1");
//New York || Pendry Manhattan West || Times Square || Broadway
let broadway = document.querySelector(".broadway");
let broadwayOption1 = document.querySelector(".bwy1");
let broadwayOption2 = document.querySelector(".bwy2");
let broadwayOption3 = document.querySelector(".bwy3");
let bwyEnd1 = document.querySelector(".timesend2");

//New York || The Pierre
let pierre = document.querySelector(".pierre");
let pierreOption1 = document.querySelector(".pierre1");
let pierreOption2 = document.querySelector(".pierre2");
//New York || The Pierre || Central Park
let centralpark = document.querySelector(".central");
let centralOption1 = document.querySelector(".central1");
let centralOption2 = document.querySelector(".central2");
let centralend1 = document.querySelector(".centralend1");
let centralend2 = document.querySelector(".centralend2");
//New York || The Pierre || Hudson East River
let hudsonriver = document.querySelector(".river");
let riverOption1 = document.querySelector(".river1");
let riverOption2 = document.querySelector(".river2");
let riverend1 = document.querySelector(".riverend1");
let riverend2 = document.querySelector(".riverend2");

//New York || The Cloudone
let cloudone = document.querySelector(".cloudone");
let coOption1 = document.querySelector(".co1");
let coOption2 = document.querySelector(".co2");
//New York || The Cloudone || Statue of Liberty
let libertyend1 = document.querySelector(".libertyend1");
//New York || The Cloudone || Rockerfeller Center
let rock = document.querySelector(".rock")
let rockOption1 = document.querySelector(".rock1");
let rockOption2 = document.querySelector(".rock2");
let rockend1 = document.querySelector(".rockend1");
let rockend2 = document.querySelector(".rockend2");

//New York || Hyatt Regency
let hyatt = document.querySelector(".hyatt");
let hyattOption1 = document.querySelector(".hyatt1");
let hyattOption2 = document.querySelector(".hyatt2");
let fieldend1 = document.querySelector(".field");
let imageend1 = document.querySelector(".image");

//Florida || The belgrove Resort & Spa
let belgrove = document.querySelector(".belgrove");
let belgroveOption1 = document.querySelector(".belgrove1");
let belgroveOption2 = document.querySelector(".belgrove2");
let westend = document.querySelector(".west");
let mangoniaend = document.querySelector(".mangonia");
//Florida || Sunseeker Resort
let sunseeker = document.querySelector(".sunseeker");
let sunOption1 = document.querySelector(".sun1");
let sunOption2 = document.querySelector(".sun2");
let yacht= document.querySelector(".yacht");
let cavern = document.querySelector(".cavern");
//Florida || Hotel Haya
let haya = document.querySelector(".haya");
let hayaOption1 = document.querySelector(".haya1");
let hayaOption2 = document.querySelector(".haya2");
let disney = document.querySelector(".disney");
let disneyOption1 = document.querySelector(".disney1");
let disneyOption2 = document.querySelector(".disney2");
let disneyend1 = document.querySelector(".disneyend1");
let disneyend2 = document.querySelector(".disneyend2");
let lego = document.querySelector(".lego");
let legoOption1 = document.querySelector(".lego1");
let legoOption2 = document.querySelector(".lego2");
let legoend1 = document.querySelector(".legoend1");
let legoend2 = document.querySelector(".legoend2");
//Florida || Holiday Inn
let inn = document.querySelector(".inn");
let innOption1 = document.querySelector(".inn1");
let innOption2 = document.querySelector(".inn2");
let golf= document.querySelector(".golf");
let baseball= document.querySelector(".baseball");


//Germany
//GRCities
let GermanyStart = document.querySelector(".GermanyBox1");
let GrOption1 = document.querySelector(".Gr1");
let GrOption2 = document.querySelector(".Gr2");
let GrOption3 = document.querySelector(".Gr3");
//GRBerlin
let BerlinStart = document.querySelector(".GermanyBox2");
let BrOption1 = document.querySelector(".Br1")
let BrOption2 = document.querySelector(".Br2")
let BrOption3 = document.querySelector(".Br3")
//GRHamburg
let HamburgStart = document.querySelector(".GermanyBox3");
let HbOption1 = document.querySelector(".Hb1")
let HbOption2 = document.querySelector(".Hb2")
let HbOption3 = document.querySelector(".Hb3")
//GRMunich
let MunichStart = document.querySelector(".GermanyBox4");

//Japan
//JPCities
let japanStart = document.querySelector(".japanBox1");
let jpOption1 = document.querySelector(".jp1");
let jpOption2 = document.querySelector(".jp2");
let jpOption3 = document.querySelector(".jp3");
//JPTokyo
let tokyoStart = document.querySelector(".japanBox2");
let tkyOption1 = document.querySelector(".tky1");
let tkyOption2 = document.querySelector(".tky2");
let tkyOption3 = document.querySelector(".tky3");
let tkyOption4 = document.querySelector(".tky4");
//TKAkihabara
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
let taterOption1 = document.querySelector(".tater1");
let taterOption2 = document.querySelector(".tater2");
let supeTaterAkiEnd1 = document.querySelector(".supeTaterAkiEnd1");
let supeTaterAkiEnd2 = document.querySelector(".supeTaterAkiEnd2");
let shrineAki = document.querySelector(".shrineAki");
let shrineOption1 = document.querySelector(".shrine1");
let shrineOption2 = document.querySelector(".shrine2");
let shrineAkiEnd1 = document.querySelector(".shrineAkiEnd1");
let shrineAkiEnd2 = document.querySelector(".shrineAkiEnd2");
//TKShibuya
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
//JPOsaka
let osakaStart = document.querySelector(".japanBox3");
let oskOption1 = document.querySelector(".osk1");
let oskOption2 = document.querySelector(".osk2");
let oskOption3 = document.querySelector(".osk3");
let oskOption4 = document.querySelector(".osk4");
//OSKUraNamba
let uraNamba = document.querySelector(".uraNamba");
let uraOption1 = document.querySelector(".ura1");
let uraOption2 = document.querySelector(".ura2");
let foodNamba = document.querySelector(".foodNamba");
let uraFoodOption1 = document.querySelector(".uraFood1");
let uraFoodOption2 = document.querySelector(".uraFood2");
let uraFoodOption3 = document.querySelector(".uraFood3");
let foodNambaEnd1 = document.querySelector(".foodNambaEnd1");
let foodNambaEnd2 = document.querySelector(".foodNambaEnd2");
let foodNambaEnd3 = document.querySelector(".foodNambaEnd3");
let tourNamba = document.querySelector(".tourNamba");
let uraTourOption1 = document.querySelector(".uraTour1");
let uraTourOption2 = document.querySelector(".uraTour2");
let tourNambaEnd1 = document.querySelector(".tourNambaEnd1");
let tourNambaEnd2 = document.querySelector(".tourNambaEnd2");
//OSKCastle
let oskCastle = document.querySelector(".oskCastle");
let castleOption1 = document.querySelector(".castle1");
let castleOption2 = document.querySelector(".castle2");
let oskArmor1 = document.querySelector(".oskArmor1");
let armorOption1 = document.querySelector(".armor1");
let armorOption2 = document.querySelector(".armor2");
let oskCastleEnd1 = document.querySelector(".oskCastleEnd1");
let oskCastleEnd2 = document.querySelector(".oskCastleEnd2");
let oskArmor2 = document.querySelector(".oskArmor2");
let armourOption1 = document.querySelector(".armour1");
let armourOption2 = document.querySelector(".armour2");
let oskCastleEnd3 = document.querySelector(".oskCastleEnd3");
let oskCastleEnd4 = document.querySelector(".oskCastleEnd4");
//JPHokkaido
let hokkaidoStart = document.querySelector(".japanBox4");
let hkdoOption1 = document.querySelector(".hkdo1");
let hkdoOption2 = document.querySelector(".hkdo2");
let hkdoOption3 = document.querySelector(".hkdo3");
let hkdoOption4 = document.querySelector(".hkdo4");
//HKDNationalPark
let daiPark = document.querySelector(".daiPark");
let daiParkOption1 = document.querySelector(".dai1");
let daiParkOption2 = document.querySelector(".dai2");
let hotspringsDai = document.querySelector(".hotspringsDai");
let springOption1 = document.querySelector(".spring1");
let springOption2 = document.querySelector(".spring2");
let hotspringsEnd1 = document.querySelector(".hotspringsEnd1");
let hotspringsEnd2 = document.querySelector(".hotspringsEnd2");
let ginsenDai = document.querySelector(".ginsenDai");
let ginsenOption1 = document.querySelector(".ginsen1");
let ginsenOption2 = document.querySelector(".ginsen2");
let ginsenDaiEnd1 = document.querySelector(".ginsenDaiEnd1");
let ginsenDaiEnd2 = document.querySelector(".ginsenDaiEnd2");
//HKDSapporo
let sapporo = document.querySelector(".sapporo");
let sapoOption1 = document.querySelector(".sapo1");
let sapoOption2 = document.querySelector(".sapo2");
let museumSapo = document.querySelector(".museumSapo");
let beerOption1 = document.querySelector(".beer1");
let beerOption2 = document.querySelector(".beer2");
let beerOption3 = document.querySelector(".beer3");
let museumSapoEnd1 = document.querySelector(".museumSapoEnd1");
let museumSapoEnd2 = document.querySelector(".museumSapoEnd2");
let museumSapoEnd3 = document.querySelector(".museumSapoEnd3");
let parkSapo = document.querySelector(".parkSapo");
let parkOdrOption1 = document.querySelector(".parkOdr1");
let parkOdrOption2 = document.querySelector(".parkOdr2");
let parkSapoEnd1 = document.querySelector(".parkSapoEnd1");
let parkSapoEnd2 = document.querySelector(".parkSapoEnd2");


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
  GermanyStart.style.display = "flex";
});
startButton3.addEventListener("click", function () {
  title.innerHTML = "Where Would You Like To Go?";
  start.style.display = "none";
  japanStart.style.display = "flex";
});

//Japan
//Japan Cities
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
//Japan || Tokyo Hotels
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
//Japan || Osaka Hotels
oskOption1.addEventListener("click", function () {
  osakaStart.style.display = "none";
  title.innerHTML = "This Hotel is Near Ura Namba, What Would You Like To Do?";
  uraNamba.style.display = "flex";
});
oskOption2.addEventListener("click", function () {
  osakaStart.style.display = "none";
  title.innerHTML = "This Hotel is Near Ura Namba, What Would You Like To Do?";
  uraNamba.style.display = "flex";
});
oskOption3.addEventListener("click", function () {
  osakaStart.style.display = "none";
  title.innerHTML =
    "This Hotel is Near Osaka Castle, So You Go There For A Tour";
  oskCastle.style.display = "flex";
});
oskOption4.addEventListener("click", function () {
  osakaStart.style.display = "none";
  title.innerHTML =
    "This Hotel is Near Osaka Castle, So You Go There For A Tour";
  oskCastle.style.display = "flex";
});
//Japan || Hokkaido Hotels
hkdoOption1.addEventListener("click", function () {
  hokkaidoStart.style.display = "none";
  title.innerHTML =
    "This Hotel is Near Daisetsuzan National Park, Where Would You Like To Go?";
  daiPark.style.display = "flex";
});
hkdoOption2.addEventListener("click", function () {
  hokkaidoStart.style.display = "none";
  title.innerHTML =
    "This Hotel is Near Daisetsuzan National Park, Where Would You Like To Go?";
  daiPark.style.display = "flex";
});
hkdoOption3.addEventListener("click", function () {
  hokkaidoStart.style.display = "none";
  title.innerHTML = "This Hotel is Near Sapporo, Where Would You Like To Go?";
  sapporo.style.display = "flex";
});
hkdoOption4.addEventListener("click", function () {
  hokkaidoStart.style.display = "none";
  title.innerHTML = "This Hotel is Near Sapporo, Where Would You Like To Go";
  sapporo.style.display = "flex";
});
//Tokyo
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
taterOption2.addEventListener("click", function () {
  supeTaterAki.style.display = "none";
  title.innerHTML = "";
  supeTaterAkiEnd2.style.display = "flex";
});
shrineOption1.addEventListener("click", function () {
  shrineAki.style.display = "none";
  title.innerHTML = "";
  shrineAkiEnd1.style.display = "flex";
});
shrineOption2.addEventListener("click", function () {
  shrineAki.style.display = "none";
  title.innerHTML = "";
  shrineAkiEnd2.style.display = "flex";
});

shbyaOption1.addEventListener("click", function () {
  shibuya.style.display = "none";
  title.innerHTML =
    "There Are Tons Of Pieces Of Art On Display For People To See";
  museumShbya.style.display = "flex";
});
shbyaOption2.addEventListener("click", function () {
  shibuya.style.display = "none";
  title.innerHTML = "You Happen Upon a Shrine, What Do You Do?";
  shrineShbya.style.display = "flex";
});
shbyaOption3.addEventListener("click", function () {
  shibuya.style.display = "none";
  title.innerHTML = "";
  parkShbyaEnd1.style.display = "flex";
});
museumOption1.addEventListener("click", function () {
  museumShbya.style.display = "none";
  title.innerHTML = "";
  museumShbyaEnd1.style.display = "flex";
});
museumOption2.addEventListener("click", function () {
  museumShbya.style.display = "none";
  title.innerHTML = "";
  museumShbyaEnd2.style.display = "flex";
});
shrineShbyaOption1.addEventListener("click", function () {
  shrineShbya.style.display = "none";
  title.innerHTML = "";
  shrineShbyaEnd1.style.display = "flex";
});
shrineShbyaOption2.addEventListener("click", function () {
  shrineShbya.style.display = "none";
  title.innerHTML = "";
  shrineShbyaEnd2.style.display = "flex";
});
//Osaka
uraOption1.addEventListener("click", function () {
  uraNamba.style.display = "none";
  title.innerHTML = "Which Streetfood Would You Like to Try?";
  foodNamba.style.display = "flex";
});
uraOption2.addEventListener("click", function () {
  uraNamba.style.display = "none";
  title.innerHTML = "Which Tour Would You Like To Go On?";
  tourNamba.style.display = "flex";
});
uraFoodOption1.addEventListener("click", function () {
  foodNamba.style.display = "none";
  title.innerHTML = "";
  foodNambaEnd1.style.display = "flex";
});
uraFoodOption2.addEventListener("click", function () {
  foodNamba.style.display = "none";
  title.innerHTML = "";
  foodNambaEnd2.style.display = "flex";
});
uraFoodOption3.addEventListener("click", function () {
  foodNamba.style.display = "none";
  title.innerHTML = "";
  foodNambaEnd3.style.display = "flex";
});
uraTourOption1.addEventListener("click", function () {
  tourNamba.style.display = "none";
  title.innerHTML = "";
  tourNambaEnd1.style.display = "flex";
});
uraTourOption2.addEventListener("click", function () {
  tourNamba.style.display = "none";
  title.innerHTML = "";
  tourNambaEnd2.style.display = "flex";
});

castleOption1.addEventListener("click", function () {
  oskCastle.style.display = "none";
  title.innerHTML =
    "After Looking Around, Some Samurai Armor Catches Your Attention, What will You Do?";
  oskArmor1.style.display = "flex";
});
castleOption2.addEventListener("click", function () {
  oskCastle.style.display = "none";
  title.innerHTML =
    "You Are Distracted In The Middle Of The Tour, What Will You Do";
  oskArmor2.style.display = "flex";
});
armorOption1.addEventListener("click", function () {
  oskArmor1.style.display = "none";
  title.innerHTML = "";
  oskCastleEnd1.style.display = "flex";
});
armorOption2.addEventListener("click", function () {
  oskArmor1.style.display = "none";
  title.innerHTML = "";
  oskCastleEnd2.style.display = "flex";
});
armourOption1.addEventListener("click", function () {
  oskArmor2.style.display = "none";
  title.innerHTML = "";
  oskCastleEnd3.style.display = "flex";
});
armourOption2.addEventListener("click", function () {
  oskArmor2.style.display = "none";
  title.innerHTML = "";
  oskCastleEnd4.style.display = "flex";
});
//Hokkaido
daiParkOption1.addEventListener("click", function () {
  daiPark.style.display = "none";
  title.innerHTML = "What Action Would You Like To Commit?";
  hotspringsDai.style.display = "flex";
});
daiParkOption2.addEventListener("click", function () {
  daiPark.style.display = "none";
  title.innerHTML =
    "What A Lovely Day For Hiking, What Would You Like To Do While On This Little Escapade?";
  ginsenDai.style.display = "flex";
});
springOption1.addEventListener("click", function () {
  hotspringsDai.style.display = "none";
  title.innerHTML = "";
  hotspringsEnd1.style.display = "flex";
});
springOption2.addEventListener("click", function () {
  hotspringsDai.style.display = "none";
  title.innerHTML = "";
  hotspringsEnd2.style.display = "flex";
});
ginsenOption1.addEventListener("click", function () {
  ginsenDai.style.display = "none";
  title.innerHTML = "";
  ginsenDaiEnd1.style.display = "flex";
});
ginsenOption1.addEventListener("click", function () {
  ginsenDai.style.display = "none";
  title.innerHTML = "";
  ginsenDaiEnd1.style.display = "flex";
});

sapoOption1.addEventListener("click", function () {
  sapporo.style.display = "none";
  title.innerHTML =
    "What A Great Place To Drink, What Would You Like To Do?";
  museumSapo.style.display = "flex";
});
sapoOption2.addEventListener("click", function () {
  sapporo.style.display = "none";
  title.innerHTML = "What A Beautiful Park In A Concrete Jungle, What Would You Like To Do?";
  parkSapo.style.display = "flex";
});
beerOption1.addEventListener("click", function () {
  museumSapo.style.display = "none";
  title.innerHTML = "";
  museumSapoEnd1.style.display = "flex";
});
beerOption2.addEventListener("click", function () {
  museumSapo.style.display = "none";
  title.innerHTML = "";
  museumSapoEnd2.style.display = "flex";
});
beerOption3.addEventListener("click", function () {
  museumSapo.style.display = "none";
  title.innerHTML = "";
  museumSapoEnd3.style.display = "flex";
});
parkOdrOption1.addEventListener("click", function () {
  parkSapo.style.display = "none";
  title.innerHTML = "";
  parkSapoEnd1.style.display = "flex";
});
parkOdrOption2.addEventListener("click", function () {
  parkSapo.style.display = "none";
  title.innerHTML = "";
  parkSapoEnd2.style.display = "flex";
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
//New York Hotels
nyOption1.addEventListener("click", function () {
  newyorkStart.style.display = "none";
  title.innerHTML = "This hotel is near midtown Manhattan, what would you like to do?";
  pendrywest.style.display = "flex"
});
nyOption2.addEventListener("click", function () {
  newyorkStart.style.display = "none";
  title.innerHTML = "This hotel is near Central Park, what would you like to do?";
  pierre.style.display = "flex"
});
nyOption3.addEventListener("click", function () {
  newyorkStart.style.display = "none";
  title.innerHTML = "This hotel is in lower Manahattan, what would you like to do?";
  cloudone.style.display = "flex"
});
nyOption4.addEventListener("click", function () {
  newyorkStart.style.display = "none";
  title.innerHTML = "This hotel is near JFK, what would you like to do?";
  hyatt.style.display = "flex"
});
//Florida Hotels
flOption1.addEventListener("click", function () {
  floridaStart.style.display = "none";
  title.innerHTML = "This hotel is near multiple bodies of water, what would you like to do?";
  belgrove.style.display = "flex";
});
flOption2.addEventListener("click", function () {
  floridaStart.style.display = "none";
  title.innerHTML = "This hotel is near Port Charlotte, what would you like to do?";
  sunseeker.style.display = "flex";
});
flOption3.addEventListener("click", function () {
  floridaStart.style.display = "none";
  title.innerHTML = "This hotel is near multiple amusement parks, what would you like to do?";
  haya.style.display = "flex";
});
flOption4.addEventListener("click", function () {
  floridaStart.style.display = "none";
  title.innerHTML = "This hotel is near multiple sports fields, what would you like to do?";
  inn.style.display = "flex";

});
//Los Angeles Hotels
laOption1.addEventListener("click", function () {
  losangelesStart.style.display = "none";
  title.innerHTML = "Test";
});
laOption2.addEventListener("click", function () {
  losangelesStart.style.display = "none";
  title.innerHTML = "Test";
});
laOption3.addEventListener("click", function () {
  losangelesStart.style.display = "none";
  title.innerHTML = "Test";
});
laOption4.addEventListener("click", function () {
  losangelesStart.style.display = "none";
  title.innerHTML = "Test";
});
//Las Vegas Hotels
lvOption1.addEventListener("click", function () {
  lasvegasStart.style.display = "none";
  title.innerHTML = "Test";
});
lvOption2.addEventListener("click", function () {
  lasvegasStart.style.display = "none";
  title.innerHTML = "Test";
});
lvOption3.addEventListener("click", function () {
  lasvegasStart.style.display = "none";
  title.innerHTML = "Test";
});
lvOption4.addEventListener("click", function () {
  lasvegasStart.style.display = "none";
  title.innerHTML = "Test";
});
//New York || pmw
pmwOption1.addEventListener("click", function () {
  pendrywest.style.display = "none";
  title.innerHTML = "What will you do here?";
  unionsquare.style.display = "flex";
});
pmwOption2.addEventListener("click", function () {
  pendrywest.style.display = "none";
  title.innerHTML ="As you walk through Times square you look for things to do";
  timessquare.style.display = "flex";
});
//New York || pmw || Union Square
unionOption1.addEventListener("click", function () {
  unionsquare.style.display = "none";
  title.innerHTML = "";
  unionEnd1.style.display = "flex";
});
unionOption2.addEventListener("click", function () {
  unionsquare.style.display = "none";
  title.innerHTML ="";
  unionEnd2.style.display = "flex";
});
//New York || pmw || Times Square
timesOption1.addEventListener("click", function () {
  timessquare.style.display = "none";
  title.innerHTML ="";
  timesEnd1.style.display = "flex";
});
timesOption2.addEventListener("click", function () {
  timessquare.style.display = "none";
  title.innerHTML ="Which show will you watch?";
  broadway.style.display = "flex";
});
//New York || pmw || Times Square || bwy
broadwayOption1.addEventListener("click", function () {
  broadway.style.display = "none";
  title.innerHTML ="";
  bwyEnd1.style.display = "flex";
});
broadwayOption2.addEventListener("click", function () {
  broadway.style.display = "none";
  title.innerHTML ="";
  bwyEnd1.style.display = "flex";
});
broadwayOption3.addEventListener("click", function () {
  broadway.style.display = "none";
  title.innerHTML ="";
  bwyEnd1.style.display = "flex";
});

//New York || The Pierre
pierreOption1.addEventListener("click", function () {
  pierre.style.display = "none";
  title.innerHTML ="You walk through central park, what now?";
  centralpark.style.display = "flex"
});
pierreOption2.addEventListener("click", function () {
  pierre.style.display = "none";
  title.innerHTML ="What will you do now?";
  hudsonriver.style.display = "flex";
});
//New York || The Pierre || Central Park
centralOption1.addEventListener("click", function () {
  centralpark.style.display = "none";
  title.innerHTML ="";
  centralend1.style.display = "flex"
});
centralOption2.addEventListener("click", function () {
  centralpark.style.display = "none";
  title.innerHTML ="";
centralend2.style.display = "flex"
});
//New York || The Pierre || Hudson East River
riverOption1.addEventListener("click", function () {
  hudsonriver.style.display = "none";
  title.innerHTML ="";
  riverend1.style.display = "flex"
});
riverOption2.addEventListener("click", function () {
  hudsonriver.style.display = "none";
  title.innerHTML ="";
  riverend2.style.display = "flex"
});

  //New York || The Cloudone
  coOption1.addEventListener("click", function () {
    cloudone.style.display = "none";
    title.innerHTML ="";
    libertyend1.style.display = "flex"
});
  coOption2.addEventListener("click", function () {
    cloudone.style.display = "none";
    title.innerHTML ="What will you do at Rockefeller?";
    rock.style.display = "flex"
});
  //New York || The Cloudone || Rockerfeller Center
  rockOption1.addEventListener("click", function () {
    rock.style.display = "none";
    title.innerHTML ="";
    rockend1.style.display = "flex";
});
  rockOption2.addEventListener("click", function () {
    rock.style.display = "none";
    title.innerHTML ="";
    rockend2.style.display = "flex";
});
  //New York || Hyatt Regency
  hyattOption1.addEventListener("click", function () {
    hyatt.style.display = "none";
    title.innerHTML ="";
    fieldend1.style.display = "flex"
});
  hyattOption2.addEventListener("click", function () {
    hyatt.style.display = "none";
    title.innerHTML ="";
    imageend1.style.display = "flex";
});
//Florida || The Belgrove Resort & Spa
belgroveOption1.addEventListener("click", function () {
  belgrove.style.display = "none";
  title.innerHTML ="";
  westend.style.display = "flex";
});
belgroveOption2.addEventListener("click", function () {
  belgrove.style.display = "none";
  title.innerHTML ="";
  mangoniaend.style.display = "flex";
});
//Florida || Sunseeker Resort
sunOption1.addEventListener("click", function () {
  sunseeker.style.display = "none";
  title.innerHTML ="";
  yacht.style.display = "flex";
});
sunOption2.addEventListener("click", function () {
  sunseeker.style.display = "none";
  title.innerHTML ="";
  cavern.style.display = "flex";
});
//Florida || Hotel Haya
hayaOption1.addEventListener("click", function () {
  haya.style.display = "none";
  title.innerHTML ="What will you do in Walt Disney World?";
  disney.style.display = "flex";
});
hayaOption2.addEventListener("click", function () {
  haya.style.display = "none";
  title.innerHTML ="What will you do at Legoland?";
  lego.style.display = "flex";
});
//Florida || Hotel Haya || Disney
disneyOption1.addEventListener("click", function () {
  disney.style.display = "none";
  title.innerHTML ="";
  disneyend1.style.display = "flex";
});
disneyOption2.addEventListener("click", function () {
  disney.style.display = "none";
  title.innerHTML ="";
  disneyend2.style.display = "flex";
});
//Florida || Hotel Haya || Lego
legoOption1.addEventListener("click", function () {
  lego.style.display = "none";
  title.innerHTML ="";
  legoend1.style.display = "flex";
});
legoOption2.addEventListener("click", function () {
  lego.style.display = "none";
  title.innerHTML ="";
  legoend2.style.display = "flex";
});
//Florida || Holiday Inn
innOption1.addEventListener("click", function () {
  inn.style.display = "none";
  title.innerHTML ="";
  golf.style.display = "flex";
});
innOption2.addEventListener("click", function () {
  inn.style.display = "none";
  title.innerHTML ="";
  baseball.style.display = "flex";
});


//Germany
GrOption1.addEventListener("click", function () {
  GermanyStart.style.display = "none";
  title.innerHTML = "Where Would You Like To Stay On This Trip?";
  BerlinStart.style.display = "flex";
});
GrOption2.addEventListener("click", function () {
  GermanyStart.style.display = "none";
  title.innerHTML = "Where Would You Like To Stay On This Trip?";
  Hamburgstart.style.display = "flex";
});
GrOption3.addEventListener("click", function () {
  GermanyStart.style.display = "none";
  title.innerHTML = "Where Would You Like To Stay On This Trip?";
  MunichStart.style.display = "flex";
});