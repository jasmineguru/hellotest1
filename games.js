function rps(){

    var userChoice = prompt("Do you choose rock, paper or scissors?");
    if (! userChoice) {
        // User choice was undefined
        return ("<p>Player 1, you cheated! Refresh this screen and fight like a man.</p>");
    }
    // Computer choice
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    // Compare user choice vs computer choice
    var compare = function(choice1,choice2) {
        if (choice1 === choice2) {
            return "It's a tie!";
        }
        if (choice1 === "rock") {
            if (choice2 === "scissors") {
                // rock wins
                return "You win!";
            } else {
                // paper wins
                return "You lose! Try again.";
            }
        }
        if (choice1 === "paper") {
            if (choice2 === "rock") {
                // paper wins
                return "You win!";
            } else {
                // scissors wins
                return "You lose! Try again.";
            }
        }
        if (choice1 === "scissors") {
            if (choice2 === "rock") {
                // rock wins
                return "You lose! Try again.";
            } else {
                // scissors wins
                return "You win!";
            }
        }
    };
    // Run the compare function
    var results = compare(userChoice,computerChoice);
alert (results);
}

function tictactoe(){

    
}