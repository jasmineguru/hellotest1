function multiples(){
    var user_num = prompt("What's your number?");
    if(user_num %4==0){
        alert("Four");
    }
    if(user_num %10==0){
        alert("Ten");
    }
    if(user_num %4 && user_num %10==0){
        alert("FourTen");
    }
  else(user_num %4 || user_num %10 != 0)
    }
    
    

function triangle(){
    let A1= parseInt ( prompt ("Enter Angle 1"));
    let A2= parseInt ( prompt ("Enter Angle 2"));
    let A3= 180-(A2 + A1);
    alert ("Angle 3 is " +A3);
}

function century(){
   let year = parseInt (prompt("Write a year and I will tell you the century it belongs in!"));
   let century1 = parseInt((year - 1) / 100) + 1;
   alert("The century is" + century1);
   
   }

   function password_check(userName, password){
  
    if (userName.toLowercase=="Hello"&& password=="12345"){
      return(userName)
    }
    
    else{
      return("Log in declined")
    }
  }
  console.log(password_check("Hello", "12345"));

  function encryption(){
 
    var alpha = {'a':'ranen','b':'amat', 'c':'mahisha', 'd':'mehdi', 'e':'aidan', 'f':'hesham','g':'kirimie', 'h':'omar', 'i':'roxanne', 'j':'mustafa', 'k':'zaid', 'l':'danish', 'm':'anish', 'n':'alex','o':'rizwan', 'p':'shaarif', 'q':'toshan', 'r':'pais', 's':'yunus', 't':'whitney','u':'mehkeh','v':'sriya','w':'nikola','x':'shams','y':'sathya','z':'korain' }
    var a = prompt("Tell me your word");
    var text = a.replace(/[ranenamatmahishamehdiaidanheshamkirimieomarroxannemustafazaiddanishanishalexrizwanshaariftoshanpaisyunuswhitneymehkehsriyanikolashamssathyakorain]/g,m=>alpha[m]);
    alert (text + ' ' +'copy this to clipboard')
     }
  
 
  function decryption(){
 
    var alpha = {'ranen':'a', 'amat':'b', 'mahisha':'c','mehdi':'d', 'aidan':'e','hesham':'f','kirimie':'g', 'omar':'h', 'roxanne':'i', 'mustafa':'j','zaid':'k', 'danish':'l', 'anish':'m', 'alex':'n', 'rizwan':'o','shaarif':'p', 'toshan':'q', 'pais':'r', 'yunus':'s', 'whitney':'t', 'mehkeh':'u','sriya':'v', 'nikola':'w', 'shams':'x', 'sathya': 'y', 'korain':'z'}
    var b = prompt("What do you wish to decrypt(copy and paste your encrypted word)");
    var text = b.replace(/[ranenamatmahishamehdiaidanheshamkirimieomarroxannemustafazaiddanishanishalexrizwanshaariftoshanpaisyunuswhitneymehkehsriyanikolashamssathyakorain]/g,m=>alpha[m]);
    alert (text)
  }

function simpleEncryption(){

var alpha = 
{
  'a':'b','b':'c', 'c':'d', 'd':'e', 'e':'f', 'f':'g','g':'h', 'h':'i', 'i':'j', 'j':'k', 'k':'l', 'l':'m', 'm':'n', 'n':'o','o':'p', 'p':'q', 'q':'r', 'r':'s', 's':'t', 't':'u','u':'v','v':'w','w':'x','x':'y','y':'z','z':'a'
}
var a = prompt("Tell me your word");
var text = a.replace(/[abcdefghijklmnopqrstuvwxyz]/g,m=>alpha[m]);
alert("This is your encrypted text : " + text + " . Copy this to your clipboard");
  }


function simpleDecryption(){

 var alpha = 
 {
   'b':'a', 'c' :'b', 'd':'c', 'e':'d', 'f':'e', 'g':'f',  'h':'g', 'i':'h', 'j':'i', 'k':'j', 'l':'k', 'm':'l', 'n':'m', 'o':'n', 'p':'p', 'q':'p', 'r':'q', 's':'r', 't':'s', 'u':'t', 'v':'u', 'w':'v', 'x':'w', 'y':'x', 'z':'y', 'a': 'z'
 } 
 var a = prompt("Paste your encrypted message");
 var text = b.replace(/[abcdefghijklmnopqrstuvwxyz]/g,m=>alpha[m]);
 alert("This is your decrypted text : " + text + " !");
}