var letterBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = [];

document.onkeyup = function (event) {
    // Actions from Users & Guests
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    var compGuess = letterBank[Math.floor(Math.random()*letterBank.length)];

    if (event.keyCode >= 65 && event.keyCode <= 90) {
    //Correct Guess
    if (userGuess == compGuess) {
        wins++;
        guessesLeft = 10;
        guesses = [];
        document.getElementById("stats").innerHTML = "<p>Wins: " + wins + "</p";

    //Incorrect Guess
    }else if ((userGuess !== compGuess) && (guessesLeft > 1)) {
        guessesLeft--;
        userGuess.push(" " + guesses);
        document.getElementById("stats").innerHTML = "<p>Guesses Left: " + guessesLeft + "</p";

    //No more guesses = Increase lose
    }else ((userGuess !== compGuess) && (guessesLeft > -1)) {
        losses++;
        //Reset Guesses

        document.getElementById("stats").innerHTML = "<p>Losses: " + losses + "</p";

        }
    }
};
