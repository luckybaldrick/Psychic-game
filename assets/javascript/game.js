
var wins = 0;
var losses = 0;
var guessLeft = 9;
var alreadyGuessed = [];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);
// get letter to guess to update after game ends. run the function in the if statements.
var updateLettertoGuess = function() {
this.computerGuess = this.computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

var updateAlreadyGuessed= function() {
document.querySelector("#sofar").innerHTML = "Your Guesses so far: " + alreadyGuessed;
}
var updateGuessesLeft = function() {
    document.querySelector("#guessleft").innerHTML = "Guesses Left: " + guessLeft;
}
// get reset function to work
var reset = function() {
    guessLeft = 9;
    alreadyGuessed = [];

    updateLettertoGuess();
    updateAlreadyGuessed();
    updateGuessesLeft();
    console.log(computerGuess);
}

document.onkeyup = function (event) {
    var userGuess = event.key;
    guessLeft --
   alreadyGuessed.push(userGuess);
   updateAlreadyGuessed();
   updateGuessesLeft();
    if (userGuess === computerGuess) {
        alert("You're Psychic!");
        wins ++;
        this.querySelector("#wins").innerHTML = "Wins: " + wins;
        reset();
    }
    alreadyGuessed.push(event.key);

    console.log(guessLeft);
    if (guessLeft === 0) {
        alert("You are not psychic. Try again");
        losses ++
        this.querySelector("#losses").innerHTML = "Losses: " + losses;
        reset();
    }

}