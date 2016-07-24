$(document).ready(function () {
    /*counting*/
    for (var counter = 1; counter < 100; counter++) {
        /*checking*/
        if ((counter % 3 == 0) && (counter % 5 == 0)) {
            console.log("fizz buzz");
        } else if (counter % 5 == 0) {
            console.log("buzz");
        } else if (counter % 3 == 0) {
            console.log("fizz");
        } else {
            console.log(counter);
        }
    }
});
