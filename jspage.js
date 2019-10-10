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
  else(user_num %4 || user_num %10 != 0);
}


function triangle(){

    let a1= parseInt (prompt("Enter Angle 1"));
    let a12= parseInt (prompt("Enter Angle 2"));
    let a3= 180-(a2 + a1);
    alert ("Angle 3 is " + a3);
}


