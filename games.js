{/* <style>
    *{margin:0;padding:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}::selection{background:#fb9fe5;text-shadow:none}a{color:#0088CC;text-decoration:none;outline:0}a:hover{color:#005580}a img{border:none}img{max-width:100%}html{font-size:100%}body{padding:5%;font:300 1.25em/1.6 monospace;background:rgb(228, 228, 228);color:rgb(255, 255, 255);}h1{font-family:"Helvetica Neue",sans-serif;line-height:1;font-weight:300;margin-bottom:1em;}.game{padding:2em;background:#000;}
 </style>
</head>
<body> 
<div class="game">
 <script> */}
     // User choice

     function rockPaperScizors(){
     var userChoice = prompt("Do you choose rock, paper or scissors?");
     if (! userChoice) {
         // User choice was undefined
         document.write("<p>Player 1, you cheated! Refresh this screen and fight like a man.</p>");
     } else {
         // Display user choice
         document.write("<p>Player 1:" + " " + userChoice + "</p>");
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
     // Display computer choice
     document.write("<p>Computer:" + " " + computerChoice + "</p>");
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
    }
     // Run the compare function
     var results = compare(userChoice,computerChoice);
     // Display results
     document.write("<br><hr><br>" + results);
//  </script>

function ticTacToe(){

    
}