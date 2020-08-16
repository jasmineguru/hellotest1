// button for slife show going right//

var slideMove = 1;
showSlide(slideMove);

//set this image to first image of slide//

function plusSlide(n) {
    showSlide(slideMove += n);
  }

  // button for left//
function showSlide(n) {
    var i;
    var x = document.getElementsByClassName("slideShow");
  // x will be those with this class//
  if (n > x.length) {slideMove = 1}
  //if homeSlide is greater value than character  count, then it is set to 0//
  if (n < 1) {slideMove = x.length}
  // if homeSlide is less than one, then its set to value of x.length//
  for (i = 0; i < x.length; i++) {
      // i starts at 0, i must be greater than x.length in order for the loop to continue, increase value by 1 each time//
      x[i].style.display = "none";  
    }
    x[slideMove-1].style.display = "block";  
  }



