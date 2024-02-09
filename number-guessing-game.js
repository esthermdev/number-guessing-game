function runGame() {

    let guessString = " ";
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;

    const randomNumber = Math.random() * 100;
    const randomInteger = Math.floor(randomNumber);
    const target = randomInteger + 1;
    console.log(target);

    do { 
        guessString = prompt("I am thinking of a number in the range 1 to 100. \n\nWhat is the number?");
        
        if (guessString === null) {
            return;
        }
        
        guessNumber = +guessString;
        numTries += 1;
        correct = checkGuess(guessNumber, target);

    } while (!correct);
    alert ("You got it! The number was " + target + ".\n\nIt took you " + numTries + " tries to guess correctly.")

}

function checkGuess(guessNumber, target) {
    let correct = false;

    if (isNaN(guessNumber)) {
        alert ("Please enter an integer in the range 1-100.");
    } else if (guessNumber < 1 || guessNumber > 100) {
        alert("Please enter an integer in the 1-100 range.");
    } else if (guessNumber === target) {
        correct = true; 
    } else {
        const range = 10;
        const minRange = target - range;
        const maxRange = target + range;

        if (guessNumber >= minRange && guessNumber <= maxRange) {
            alert("You're getting warmer!");
        } else {
            alert("You're getting colder!");
        }
    }
    return correct;
}