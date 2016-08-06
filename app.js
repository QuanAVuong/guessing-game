/*global $*/
/*glocal location*/

// generate a random number (that is hidden from the player) that the player will try to guess
var number = Math.round(Math.random()*100);
// allow a player to type a number guess into an input box
var guess;
// allow up to 5 guesses
var guessRemaining = 5;
var matchRate;

// HOW TO PAUSE SCRIPT FOR USER INPUT WITHOUT PROMPT ?
// for (var guessCount = 5; guessRemaining > 0  ; i--) {
//     // prompt("What's your lucky number ?")
//     guess = $("input[value]").val();
//     matchRate = Math.abs(number - guess);
    
//     // inform the player if they guess correctly
// }

// inform the player if they have run out of guesses
// prompt("5 times already. GAME OVAAA. Play again ?")

function main() {
    // $("#feedback").append("Secret number:" + number + "<br/>");
    
    guess = Number($("input[value]").val());
    // BONUS: show the previous guesses to the user, so they know what they've already guessed
    $("#guess").append("Your lucky number: " + guess + "<br/>")
    
    matchRate = Math.abs(number - guess);
    // $("#feedback").append("matchRate: " + matchRate + "<br/>")
    
    // BONUS: prevent players from entering non-valid input. In other words, prevent players from entering anything other than a number between 1 and 100
    while (typeof guess != "number" && (guess < 0 || guess > 100) ) {      // NOT WORKING
        guess = prompt("Do you want the money or not ? Enter 0 - 100 only.", "Integer from 0 - 100");
    }
    
    // BONUS: inform the user about their guesses' accuracy 
    // Switch vs If/else vs ternary
    // switch(true) {
    //     case matchRate === 0: // syntax ?
    // }
    // Ternary operator practice:
    matchRate === 0 ? (
        $("#feedback").text("$$$$$"),
        // BONUS: give the player a 'prize' if they win. For example, you can show them a GIF or picture as a reward for guessing correctly. Or you can have a fake set of prizes and randomly award one to winners
        $("body").append("<img src='http://www.animated-gifs.eu/money-dollar-signs/0060.gif' />")
    ) :
    matchRate < 2 ? (
        $("#feedback")
            .text("Please, that's all the cash I have left...")
            .addClass("matchRate matchRate2")
        // $("#feedback").removeClass("matchRate2")
    ) :
    matchRate < 5 ? (
        $("#feedback")
            .text("HOT")
            .addClass("matchRate matchRate5")
        // $("#feedback").removeClass("matchRate5")
    ) :
    matchRate < 10 ? (
        $("#feedback")
            .text("Getting Warm!")
            .addClass("matchRate matchRate10")
        // $("#feedback").removeClass("matchRate10")
    ) :
    matchRate < 20 ? (
        $("#feedback")
            .text("Room Temperature !")
            .addClass("matchRate matchRate20")
        // $("#feedback").removeClass("matchRate20")
    ) :
    matchRate < 30 ? (
        $("#feedback")
            .text("Still Brrrr")
            .addClass("matchRate matchRate30")
        // $("#feedback").removeClass("matchRate30")
    ) :
    matchRate < 40 ? (
        $("#feedback")
            .text("ICE COLD")
            .addClass("matchRate matchRate40")
        // $("#feedback").removeClass("matchRate40")
    ) :
    matchRate < 50 ? (
        $("#feedback")
            .text("FROZEN! ~LET IT GO~")
            .addClass("matchRate matchRate50")
        // $("#feedback").removeClass("matchRate50")
    ) :
    matchRate >= 50 ? (
        $("#feedback")
            .text("WRONG WAY")
            .addClass("matchRate wrongWay")
        // $("#feedback").removeClass("wrongWay")
    ) : 
    $("#feedback").text("No idea what you entered");
    
    // Check guess(es) remaining
    guessRemaining === 1 ? (
        $("#guessRemaining").text("5 times' up. Close but not quite"),
        $("#guessRemaining").append("It was: " + number)
    ) : (
        guessRemaining--,
        $("#guessRemaining").text("Remaining guess(es) :" + guessRemaining)
    );
}

// START BUTTON
$("#start").click(function(){
    main();
});


// AGAIN! BUTTON
// allow the player to click a button to reset the game and start over
$("#reset").click(function(){
    location.reload();
});



// BONUS: add a button that will give the user a hint (for example, a range of numbers that they should guess between)
var hint = function(){
    $("p.hint").text("So my awesome feedbacks aren't enough eh ? (psst: it's within " + matchRate + " points)");
}
$("button.hint").click(function() {
    hint();
});




// Add Keyboard event handlers
$(document).keypress(function(e) {
    if(e.which === 13) {    // Enter
        main();
    } else if (e.which === 32) { // Spacebar
        location.reload();
    } else if (e.which === 27) {
        hint();         // ESP => NOT  WORKING
    }
});


// BONUS: style your app (using CSS)