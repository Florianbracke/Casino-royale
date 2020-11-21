//bellsprout variables
var timesGRASShasbeencalled       = [];
var timesbellsproutlost           = [];

var garytimesGRASShasbeencalled   = [];
var garytimesbellsproutlost       = [];

//goldeen variables
var timesWATERhasbeencalled       = [];
var timesgoldeenlost              = [];

var garytimesWATERhasbeencalled   = [];
var garytimesgoldeenlost          = [];

//vulpix variables
var timesFIREhasbeencalled        = [];
var timesvulpixlost               = [];

var garytimesFIREhasbeencalled    = [];
var garytimesvulpixlost           = [];
                    
//score
var scorecountplayer              = [];
var scorecountgary                = [];



// BELLSPROUT ===============================================================================================
// function & variables
 function grass(){ 
   
     //player picks this pokemon 
     document.getElementById("yourpickhere").src = "bellsprout.png";

     //generate random number
     randomNumber = (Math.floor(Math.random() * 3)) + 1;

     //#times this pokemon has been picked
     timesGRASShasbeencalled.push("a");
     bellsproutpickamount = timesGRASShasbeencalled.length;
     document.getElementById("bellsproutpickamount").innerHTML = (" ") + Number(bellsproutpickamount) ;
     
     // IF pokemon faints          -> return function?
     if (bellsprouthp < Number(1)){ 
     alert("Bellsprout fainted, go get a piece of Joy at the pokemonenter");
     document.getElementById("bellsprouthp").innerHTML = "OMG YOU KILLED HIM";}

     // IF gary pokemon faints          -> return function?
     if (garygoldeenhp < Number(1)){ 
     alert("Gary's Goldeen fainted, show no mercy. FINISH HIM ");  
     document.getElementById("garygoldeenhp").innerHTML = "Find the nearest toilet...";}

// -------------------------------- 
// ---statements
 if (randomNumber == 1) {//tie

     // garry count bellsprout          -> needs to be function inside function or seperate function
     garytimesGRASShasbeencalled.push("a");
     garybellsproutpickamount = garytimesGRASShasbeencalled.length;
     document.getElementById("garybellsproutpickamount").innerHTML = garytimesGRASShasbeencalled.length;

     document.getElementById("yourpick").innerHTML = "Bellsprout";
     document.getElementById("pcpick").innerHTML   = "Bellsprout"; 
     document.getElementById("garypickhere").src   = "bellsprout.png";
     document.getElementById("battle").innerHTML   = "with grass vs grass, but not much happened!";
 }
 
 else if (randomNumber == 2){//here gary goldeen loses
    // playercount+1
    scorecountplayer.push("x")
    document.getElementById("scorecountplayer").innerHTML =  scorecountplayer.length;

    // garry count goldeen          -> needs to be function inside function or seperate function
     garytimesWATERhasbeencalled.push("a");
     garybellsproutpickamount = garytimesWATERhasbeencalled.length;
     
     document.getElementById("garygoldeenpickamount").innerHTML = garytimesWATERhasbeencalled.length;

    // gary goldeen -1 hp
    
    garytimesgoldeenlost.push("a");
    document.getElementById("garygoldeenhp").innerHTML = garygoldeenhp = (" ") + Number(6- (garytimesgoldeenlost.length));  

    document.getElementById("yourpick").innerHTML = "Bellsprout";
    document.getElementById("pcpick").innerHTML   = "Goldeen";  
    document.getElementById("garypickhere").src   = "goldeen.png";
    document.getElementById("battle").innerHTML   = "with grass vs water, Goldeen took damage! Smart move!";
    
    
 }  
 else if (randomNumber == 3){//here player loses
   //  garycount+1
    scorecountgary.push("x")
    document.getElementById("scorecountgary").innerHTML =  scorecountgary.length; 
    
    //player bellsprout -1 hp
    timesbellsproutlost.push("a");
    document.getElementById("bellsprouthp").innerHTML = bellsprouthp = (" ") + Number(6- (timesbellsproutlost.length));
    
    // garry count vulpix          -> needs to be function inside function or seperate function
    garytimesFIREhasbeencalled.push("a");
    garyvulpixpickamount = garytimesFIREhasbeencalled.length;
    document.getElementById("garyvulpixpickamount").innerHTML = garytimesFIREhasbeencalled.length;

    document.getElementById("yourpick").innerHTML = "Bellsprout";
    document.getElementById("pcpick").innerHTML   = "Vulpix";    
    document.getElementById("garypickhere").src   = "vulpix.png";  
    document.getElementById("battle").innerHTML   = "with grass vs fire, Bellsprout took damage!";  
 }   
}


 // GOLDEEN ===============================================================================================
 // function & variables
 function water(){  
    //player picks this pokemon
    document.getElementById("yourpickhere").src = "goldeen.png";

    //generate random number
    randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber)
   
    //# pokemon has been picked 
    timesWATERhasbeencalled.push("b");
    goldeenpickamount = timesWATERhasbeencalled.length;
    document.getElementById("goldeenpickamount").innerHTML =  (" ") + Number(goldeenpickamount) ;
    
    // IF pokemon faints          -> return function?
    if (goldeenhp < Number(1)){ 
      alert("Goldeen fainted, go get a piece of Joy at the pokemonenter");
      document.getElementById("goldeenhp").innerHTML = "OMG YOU KILLED HIM";}
      
    // IF gary pokemon faints          -> return function?
    if (garyvulpixhp < Number(1)){ 
    alert("Gary's Vulpix died, show no mercy. FINISH HIM ");  
    document.getElementById("garyvulpixhp").innerHTML = "That match can go back in it's tinderbox";}
// --------------------------------
// ---statements
if (randomNumber == 1) {//here player loses

    // garycount+1
    scorecountgary.push("x")
    document.getElementById("scorecountgary").innerHTML =  scorecountgary.length; 
   
    // garry count bellsprout          -> needs to be function inside function or seperate function
    garytimesGRASShasbeencalled.push("a");
    garybellsproutpickamount = garytimesGRASShasbeencalled.length;
    document.getElementById("garybellsproutpickamount").innerHTML = garytimesGRASShasbeencalled.length;

    timesgoldeenlost.push("a");
    document.getElementById("goldeenhp").innerHTML = goldeenhp = (" ") + Number(6- (timesgoldeenlost.length)) ;
    document.getElementById("yourpick").innerHTML ="Goldeen";
    document.getElementById("pcpick").innerHTML = "Bellsprout";  
    document.getElementById("garypickhere").src = "bellsprout.png";
    document.getElementById("battle").innerHTML = "with water vs grass, Goldeen took damage";    
}
else if (randomNumber == 2){//tie  

    // garry count goldeen         -> needs to be function inside function or seperate function
    garytimesWATERhasbeencalled.push("a");
    garygoldeenpickamount = garytimesWATERhasbeencalled.length;
    document.getElementById("garygoldeenpickamount").innerHTML = garytimesWATERhasbeencalled.length;

   document.getElementById("yourpick").innerHTML ="Goldeen";
   document.getElementById("pcpick").innerHTML = "Goldeen"; 
   document.getElementById("garypickhere").src = "goldeen.png";    
   document.getElementById("battle").innerHTML = "with water vs water, but not much happened!";

}  
else if (randomNumber == 3){ //here gary vulpix loses
   // playercount+1
   scorecountplayer.push("x");
   document.getElementById("scorecountplayer").innerHTML =  scorecountplayer.length;

   // gary vulpix -1 hp   
   garytimesvulpixlost.push("b");
   document.getElementById("garyvulpixhp").innerHTML = garyvulpixhp = (" ") + Number(6- (garytimesvulpixlost.length));  

   // garry count vulpix          -> needs to be function inside function or seperate function
   garytimesFIREhasbeencalled.push("a");
   garyvulpixpickamount = garytimesFIREhasbeencalled.length;
   document.getElementById("garyvulpixpickamount").innerHTML = garytimesFIREhasbeencalled.length;

   document.getElementById("yourpick").innerHTML ="Goldeen";
   document.getElementById("pcpick").innerHTML = "Vulpix"; 
   document.getElementById("garypickhere").src = "vulpix.png";   
   document.getElementById("battle").innerHTML = "with water vs fire, Vulpix took damage! Smart move!";
   
 }
}


// VULPIX===============================================================================================
// function & variables
function fire(){  
    //player picks this pokemon
    document.getElementById("yourpickhere").src = "vulpix.png";

    //generate
    randomNumber = Math.floor(Math.random() * 3) + 1;
    
    
    //# pokemon has been picked
    timesFIREhasbeencalled.push("c");
    vulpixpickamount = timesFIREhasbeencalled.length;
    document.getElementById("vulpixpickamount").innerHTML =  (" ") + Number(vulpixpickamount) ;

    // IF pokemon faints          -> return function?
    if (vulpixhp < Number(1)){ 
    alert("Vulpix fainted, go get a piece of Joy at the pokemonenter");  
    document.getElementById("vulpixhp").innerHTML = "OMG YOU KILLED HIM";}

    // IF gary pokemon faints          -> return function?
    if (garybellsprouthp < Number(1)){ 
    alert("Gary's Bellsprout fainted, show no mercy");  
    document.getElementById("garybellsprouthp").innerHTML = "You can put it in my compostbakske";}     
    
// --------------------------------
// ---statements
if (randomNumber == 1) {//here gary bellsprout loses

    //  playercount+1
    scorecountplayer.push("x");
    document.getElementById("scorecountplayer").innerHTML = scorecountplayer.length;

    // gary bellsprout -1 hp   
    garytimesbellsproutlost.push("b");
    document.getElementById("garybellsprouthp").innerHTML = garybellsprouthp = (" ") + Number(6- (garytimesbellsproutlost.length));  
  
    // garry count bellsprout          -> needs to be function inside function or seperate function
    garytimesWATERhasbeencalled.push("a");
    garybellsproutpickamount = garytimesWATERhasbeencalled.length;
    document.getElementById("garybellsproutpickamount").innerHTML = garytimesWATERhasbeencalled.length;

    document.getElementById("yourpick").innerHTML ="Vulpix";
    document.getElementById("pcpick").innerHTML = "Bellsprout"; 
    document.getElementById("garypickhere").src = "bellsprout.png";
    document.getElementById("battle").innerHTML = "with fire vs grass, Bellsprout took damage! Smart move!";
    
}
else if (randomNumber == 2){//here player loses
   // garycount+1
   scorecountgary.push("x");
   document.getElementById("scorecountgary").innerHTML =  scorecountgary.length;
   
   // times vulpix lost
   timesvulpixlost.push("a");
   document.getElementById("vulpixhp").innerHTML = vulpixhp = (" ") + Number(6- (timesvulpixlost.length)) ;

   // garry count goldeen         -> needs to be function inside function or seperate function
   garytimesWATERhasbeencalled.push("a");
   garygoldeenpickamount = garytimesWATERhasbeencalled.length;
   document.getElementById("garygoldeenpickamount").innerHTML = garytimesWATERhasbeencalled.length;

   document.getElementById("yourpick").innerHTML ="Vulpix";
   document.getElementById("pcpick").innerHTML = "Goldeen";  
   document.getElementById("garypickhere").src = "goldeen.png";
   document.getElementById("battle").innerHTML = "with fire vs water, Vulpix took damage!";
   
}  
else if (randomNumber == 3){//tie

   // garry count vulpix          -> needs to be function inside function or seperate function
   garytimesFIREhasbeencalled.push("a");
   garyvulpixpickamount = garytimesFIREhasbeencalled.length;
   document.getElementById("garyvulpixpickamount").innerHTML = garytimesFIREhasbeencalled.length;

   document.getElementById("yourpick").innerHTML ="Vulpix";
   document.getElementById("pcpick").innerHTML = "Vulpix"; 
   document.getElementById("garypickhere").src = "vulpix.png";
   document.getElementById("battle").innerHTML = "with fire vs fire, but not much happened!";
   }


}

