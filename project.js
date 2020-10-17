function guessthenumber(){
    var computernumber = 78; // number to guess
    var guess // initializing the variabe 

    while (guess!= computernumber){
        guess = prompt("Guess the secret number (from 0 to 100) to unlock a message");

        if(guess == computernumber){
            alert("Correct| You are a Homo Sapien");
        }
        else if(guess < computernumber){
            alert("Too low |  Where you going to the earth core?");
        }
        else if(guess > computernumber){
            alert("Too high| What, are you trying to fly to the moon and play among the star?");
        }
        else{
            alert("Undefined | Do you even know english, type in a number ");
        }
  
    }

}