
//function to generate random number
function getRandomInt(max) {    
    return Math.floor(Math.random() * Math.floor(max)); 
}
    const luckynumber = getRandomInt(22);  

    console.log(luckynumber)

//function to pick make a guess
function game() { 
    const playerguess = document.getElementById("guess").value;

    if (playerguess == luckynumber)
        {alert("omg you ARE the lucky winner, treat yourself to a drink in our newly renovated drinkroom!!");
    }
    else if (playerguess == (luckynumber + 1))
        {alert("close, but yet so far!");
    }
    else if (playerguess == (luckynumber - 1))
        {alert("close, but yet so far!");
    }
    else 
        {alert("you couldnt be more wrong! Maybe more luck next time");}
  }
