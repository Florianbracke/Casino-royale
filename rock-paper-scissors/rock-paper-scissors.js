//bellsprout variables
var timesGRASShasbeencalled = [];
var timesbellsproutlost= [];

//goldeen variables
var timesWATERhasbeencalled = [];
var timesgoldeenlost= [];

//vulpix variables
var timesFIREhasbeencalled = [];
var timesvulpixlost= [];

// BELLSPROUT ===============================================================================================
// function & variables
 function grass(){ 
     randomNumber = Math.floor(Math.random() * 3) + 1;
     timesGRASShasbeencalled.push("a");

     bellsproutpickamount = timesGRASShasbeencalled.length;
     document.getElementById("bellsproutpickamount").innerHTML = Number(bellsproutpickamount) ;
    
     if (bellsprouthp < Number(1)){ 
     alert("bellsprout fainted and is unable to perform your slavery")
   }
// -------------------------------- 
// ---statements
 if (randomNumber == 1) {
     document.getElementById("yourpick").innerHTML ="Bellsprout";
     document.getElementById("pcpick").innerHTML = "Bellsprout";
     document.getElementById("battle").innerHTML = "with grass vs grass, but not much happened!";
 }
 
 else if (randomNumber == 2){
    document.getElementById("yourpick").innerHTML ="Bellsprout";
    document.getElementById("pcpick").innerHTML = "Goldeen";
    document.getElementById("battle").innerHTML = "with grass vs water, Goldeen took damage! Smart move!";
 }  
 else if (randomNumber == 3){ //here player loses
    timesbellsproutlost.push("a");
    document.getElementById("bellsprouthp").innerHTML = bellsprouthp = Number(6- (timesbellsproutlost.length)) ;

    document.getElementById("yourpick").innerHTML ="Bellsprout";
    document.getElementById("pcpick").innerHTML = "Vulpix";
    document.getElementById("battle").innerHTML = "with grass vs fire, Bellsprout took damage!";    
 }   
}


 // GOLDEEN ===============================================================================================
 // function & variables
 function water(){ 
    randomNumber = Math.floor(Math.random() * 3) + 1;
    timesWATERhasbeencalled.push("b");

    goldeenpickamount = timesWATERhasbeencalled.length;
    document.getElementById("goldeenpickamount").innerHTML = Number(goldeenpickamount) ;
    if (goldeenhp < Number(1)){ 
      alert("goldeen fainted and is unable to perform your slavery")}
// --------------------------------
// ---statements
if (randomNumber == 1) { //here player loses
    timesgoldeenlost.push("a");
    document.getElementById("goldeenhp").innerHTML = goldeenhp = Number(6- (timesgoldeenlost.length)) ;
    document.getElementById("yourpick").innerHTML ="Goldeen";
    document.getElementById("pcpick").innerHTML = "Bellsprout";
    document.getElementById("battle").innerHTML = "with water vs grass, Goldeen took damage";
    
}
else if (randomNumber == 2){
   document.getElementById("yourpick").innerHTML ="Goldeen";
   document.getElementById("pcpick").innerHTML = "Goldeen";
   document.getElementById("battle").innerHTML = "with water vs water, but not much happened!";
}  
else if (randomNumber == 3){
   document.getElementById("yourpick").innerHTML ="Goldeen";
   document.getElementById("pcpick").innerHTML = "Vulpix";
   document.getElementById("battle").innerHTML = "with water vs fire, Vulpix took damage! Smart move!";
 }
}


// VULPIX===============================================================================================
// function & variables
function fire(){ 
    randomNumber = Math.floor(Math.random() * 3) + 1;
    timesFIREhasbeencalled.push("c");

    vulpixpickamount = timesFIREhasbeencalled.length;
    document.getElementById("vulpixpickamount").innerHTML = Number(vulpixpickamount) ;
    if (vulpixhp < Number(1)){ 
      alert("bellsprout fainted and is unable to perform your slavery")}
// --------------------------------
// ---statements
if (randomNumber == 1) {
    document.getElementById("yourpick").innerHTML ="Vulpix";
    document.getElementById("pcpick").innerHTML = "Bellsprout";
    document.getElementById("battle").innerHTML = "with fire vs grass, Bellsprout took damage! Smart move!";
    
}
else if (randomNumber == 2){ //here player loses
   timesvulpixlost.push("a");
   document.getElementById("vulpixhp").innerHTML = vulpixhp = Number(6- (timesvulpixlost.length)) ;

   document.getElementById("yourpick").innerHTML ="Vulpix";
   document.getElementById("pcpick").innerHTML = "Goldeen";
   document.getElementById("battle").innerHTML = "with fire vs water, Vulpix took damage!";
  
   
    
}  
else if (randomNumber == 3){
   document.getElementById("yourpick").innerHTML ="Vulpix";
   document.getElementById("pcpick").innerHTML = "Vulpix";
   document.getElementById("battle").innerHTML = "with fire vs fire, but not much happened!";
}}