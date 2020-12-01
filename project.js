// guess the number

function guessthenumber(){
    var computernumber = 78; // number to guess
    var guess // initializing the variabe 

        for (i = 0; i < 4; i++){
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

// DNA to RNA

function DNAtoRNA() {
    var dna = prompt('enter a dna sequence using only Cs, Ts, Gs, and As')
    let rna = ''// spliting dna
    for (let i = 0; i < dna.length ; i++)
      if (dna[i] == "T"){
          rna +="U"
          } // slecting T and replacing to U
      else {
      rna += dna[i];
      }  
    return rna ; // output new RNA 
    
}

