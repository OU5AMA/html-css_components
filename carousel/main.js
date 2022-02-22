const left__btn_carousel = document.querySelector(".left_indicator");
const right__btn_carousel = document.querySelector(".right_indicator");
const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children)
console.log(slides)


const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth)
// arrange the slides one next to another

// slides[0].style.left = slideWidth * 0 + "px";
// slides[1].style.left = slideWidth * 1 + "px";
// slides[2].style.left = slideWidth * 2 + "px";
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + "px"
});

