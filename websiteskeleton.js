var slideIndex = 1; // the initial slide


showImage(slideIndex)

function plusIndex(n){
    showImage(slideIndex += n)
}

function curntSlide(n){
    showImage(slideIndex = n);
}

function showImage(n){
    var slide = document.getElementsByClassName("slides"); // variables will be our slides who contain the class name "slides"
    var dots = document.getElementsByClassName("doties");

    if (n > slide.length) {slideIndex = 1} // if n (our first image) is greater than 
    if (n < 1) {slideIndex = slide.length}  // if slide is less than 1, then make it the last slide

    for( var i = 0; i < slide.length; i++ ){
        slide[i].style.display = "none";
    };
    slide[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "activedots";
    for(var i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("activedots", " ")
    }

    
}

