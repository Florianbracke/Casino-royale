var timesGRASShasbeencalled = [];
var timesWATERhasbeencalled = [];
var timesFIREhasbeencalled = [];


 function grass(){ 
    randomNumber = Math.floor(Math.random() * 3) + 1;
     timesGRASShasbeencalled.push("a");
     console.log(timesGRASShasbeencalled.length + " grass moves");

 if (randomNumber == 1) {
     document.getElementById("yourpick").innerHTML ="picked Bellsprout";
     document.getElementById("pcpick").innerHTML = "picked Bellsprout";
     document.getElementById("battle").innerHTML = "with grass vs grass, but not much happened!";
 }
 else if (randomNumber == 2){
    document.getElementById("yourpick").innerHTML ="picked Bellsprout";
    document.getElementById("pcpick").innerHTML = "picked Goldeen";
    document.getElementById("battle").innerHTML = "with grass vs water, Goldeen took damage!";
 }  
 else if (randomNumber == 3){
    document.getElementById("yourpick").innerHTML ="picked Bellsprout";
    document.getElementById("pcpick").innerHTML = "picked Vulpix";
    document.getElementById("battle").innerHTML = "with grass vs fire, Bellsprout took damage!";
 }    

 }

 
 function water(){ 
    randomNumber = Math.floor(Math.random() * 3) + 1;
    timesWATERhasbeencalled.push("b");
    console.log(timesWATERhasbeencalled.length + " water moves");
    
if (randomNumber == 1) {
    document.getElementById("yourpick").innerHTML ="picked Goldeen";
    document.getElementById("pcpick").innerHTML = "picked Bellsprout";
    document.getElementById("battle").innerHTML = "with water vs grass, Goldeen took damage";
}
else if (randomNumber == 2){
   document.getElementById("yourpick").innerHTML ="picked Goldeen";
   document.getElementById("pcpick").innerHTML = "picked Goldeen";
   document.getElementById("battle").innerHTML = "with water vs water, but not much happened!";
}  
else if (randomNumber == 3){
   document.getElementById("yourpick").innerHTML ="picked Goldeen";
   document.getElementById("pcpick").innerHTML = "picked Vulpix";
   document.getElementById("battle").innerHTML = "with water vs fire, Vulpix fainted! Smart move!";
}}


function fire(){ 
    randomNumber = Math.floor(Math.random() * 3) + 1;
    timesFIREhasbeencalled.push("c");
    amountvulpixplay = console.log(timesFIREhasbeencalled.length + " fire moves");
    amountvulpixhp = Number(amountvulpixplay);
    console.log(amountvulpixhp); 

if (randomNumber == 1) {
    document.getElementById("yourpick").innerHTML ="picked Vulpix";
    document.getElementById("pcpick").innerHTML = "picked Bellsprout";
    document.getElementById("battle").innerHTML = "with fire vs grass, Bellsprout took damage! Smart move!";
    
}
else if (randomNumber == 2){
   document.getElementById("yourpick").innerHTML ="picked Vulpix";
   document.getElementById("pcpick").innerHTML = "picked Goldeen";
   document.getElementById("battle").innerHTML = "with fire vs water, Vulpix took damage!";
    
}  
else if (randomNumber == 3){
   document.getElementById("yourpick").innerHTML ="picked Vulpix";
   document.getElementById("pcpick").innerHTML = "picked Vulpix";
   document.getElementById("battle").innerHTML = "with fire vs fire, but not much happened!";
}}