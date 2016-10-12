var letterBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = [];

document.onkeyup = function (event) {
    
    // User & Comp Setting
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    var compGuess = letterBank[Math.floor(Math.random() * letterBank.length)];
    
    
        //Keycode for Alphabets
        if (event.keyCode >= 65 && event.keyCode <= 90) {

        //Win Guess
            if (userGuess == compGuess) {
                
                wins++;
                document.getElementById("win-value").innerHTML = wins;
                
                guessesLeft = 10;
                document.getElementById("guesses-value").innerHTML = guessesLeft;
                
                guesses = [];
                
                
            //Incorrect Guess
            }else if ((userGuess !== compGuess) && (guessesLeft > 1)) {
                guessesLeft--;
                document.getElementById("guesses-value").innerHTML = guessesLeft;
                
                guesses.push(" " + userGuess);
                document.getElementById("lettersUsed-value").innerHTML = guesses;
          

            //No more guesses = Increase lose
            }else if ((userGuess !== compGuess) && (guessesLeft > -1)) {
                losses++;
                document.getElementById("lose-value").innerHTML = losses;
                
                guessesLeft = 10;
                document.getElementById("guesses-value").innerHTML = guessesLeft;
                
                guesses= [];  
               
            }
        }
};

function duplicate(doubleEntry) {  
  var i,  
  len=doubleEntry.length,  
  result = [],  
  obj = {};   
  for (i=0; i<len; i++)  
  {  
  obj[doubleEntry[i]]=0;  
  }  
  for (i in obj) {  
  result.push(i);  
  }  
  return result;  
  }  

