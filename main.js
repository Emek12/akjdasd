
let activeSlideNumber = 1;
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");


let dot1 = document.querySelector("#dot1");
let dot2 = document.querySelector("#dot2");
let dot3 = document.querySelector("#dot3");
let dot4 = document.querySelector("#dot4");

let slide1 = document.querySelector("#slide1");
let slide2 = document.querySelector("#slide2");
let slide3 = document.querySelector("#slide3");
let slide4 = document.querySelector("#slide4");


let hiddenActiveSlide = () => {
    let activeElement = document.querySelector(".active");
    activeElement.classList.remove("active");
}

let showSlide = (slideNumber) => {
    hiddenActiveSlide();
    document.querySelector("#slide"+slideNumber).classList.add("active");
}

let showNextSlide = () => {
    if(activeSlideNumber === 4) {
        activeSlideNumber = 1;
    } else {
        activeSlideNumber = activeSlideNumber + 1;
    }
    showSlide(activeSlideNumber);
}

let showPreviousSlide = () => {
    if(activeSlideNumber === 1) {
        activeSlideNumber = 4;
    } else {
        activeSlideNumber = activeSlideNumber - 1;
    }
    showSlide(activeSlideNumber);
}

let showSlide1 = () => {
    showNextSlide(1);
}

let showSlide2 = () => {
    showNextSlide(2);
}

let showSlide3 = () => {
    showNextSlide(3);
}

let showSlide4 = () => {
    showNextSlide(4);
}

dot1.addEventListener("click", showSlide1);
dot2.addEventListener("click", showSlide2);
dot3.addEventListener("click", showSlide3);
dot4.addEventListener("click", showSlide4);

arrowRight.addEventListener("click", showNextSlide);
arrowLeft.addEventListener("click", showPreviousSlide);
















































var collapsible = document.querySelectorAll(".collapsible");
        collapsible.forEach((item) => {
        item.addEventListener("click", function() {
        this.classList.toggle("collapsible--expanded");
    })
})


