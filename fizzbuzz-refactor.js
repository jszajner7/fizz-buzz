function validateInput() {
    //by default we are assuming that the input is valid ( setting A FLAG to true)
    var userInputcorrectFlag = true;
    //at least 1 characters
    while (inputNumber.length < 1) {
        var inputNumber = prompt("Please enter 1 digit or more.");
        userInputCorrectFlag = false;
    }
    //no spaces (if the number of spaces is larger then zero then do not run code.)
    while (inputNumber.indexOf(' ') > 0) {
        var inputNumber = prompt("Please don't enter spaces. Try a number!");
        userInputcorrectFlag = false;

    }
    //the limit is a number (if the rounded value of your number (MATH.FLOOR(inputNumber)) is the same with the initial number (imputNumber),it means that the number (inputNumber) was integer in the first place)
    while (Math.floor(inputNumber) != inputNumber) {
        var inputNumber = prompt("Your upper limit was not a number.Set it again.");
        //change the user input flag to false
        userInputcorrectFlag = false;
    }
    //PART 3 => if the limit is valid, then play the game
    if (userInputCorrectFlag = true) {
        playFizzBuzz(inputNumber);
    }
}
//Part 3.1 => fizzbuz function is counting
function playFizzBuzz(limit) {

    //loop through all the numbers and call the check counter function and the results to OL (ordered list from the index.html)
    for (var counter = 1; counter <= limit; counter++) {
        $('#showResults').append(checkFizzAndBuzz(counter));
    }
}

//PART 3.2 => check the each number and show the results
function checkFizzAndBuzz(currentNumber) {

    //set the default value for the msg variable
    var msg = "<li>" + currentNumber + "</li>";

    if (currentNumber % 3 == 0) {
        msg = "<li>Fizz</li>";
    }
    if (currentNumber % 5 == 0) {
        msg = "<li>Buzz</li>";
    }
    if ((currentNumber % 3 == 0) && (currentNumber % 5 == 0)) {}
    //output the msg;
    return msg;
}
//Then use the functions//

$(document).ready(function () {

    //PART 1 => get the upper limit from the input
    var limit = prompt("Please set the upper limit to play FizzBuzz.");

    //PART 2 => Starting the validation
    validateInput(limit);

});
