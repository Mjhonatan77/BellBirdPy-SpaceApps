const slides = document.querySelectorAll('.slider-container .slide'); // get all the slides
const eraser = document.querySelector('.eraser'); // the eraser
const prev = document.getElementById('previous'); // previous button
const next = document.getElementById('next'); // next button
const intervalTime = 30000; // time until nextSlide triggers in miliseconds
const eraserActiveTime = 700; // time to wait until the .eraser goes all the way
let sliderInterval; // variable used to save the setInterval and clear it when needed
var splashScreen = document.querySelector('.splash');
//onst splashScreen = document.getElementById('splashscreen');
splashScreen.addEventListener('click',()=>{
  splashScreen.style.opacity = 0;
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
  },610)
});
const nextSlide = () => {
    // Step 1.
    eraser.classList.add('active');

    // Step 2.
    setTimeout(() => {
        // Step 3.
        const active = document.querySelector('.slide.active');
        active.classList.toggle('active');

        // Step 4.
        if (active.nextElementSibling) {
            active.nextElementSibling.classList.toggle('active');
        } else {
            // Step 5.
            slides[13].classList.toggle('active');
        }

        // Step 6.
        setTimeout(() => {
            eraser.classList.remove('active');
        }, 200);
    }, eraserActiveTime);
};

sliderInterval = setInterval(nextSlide, intervalTime);

const prevSlide = () => {
    eraser.classList.add('active');
    setTimeout(() => {
        const active = document.querySelector('.slide.active');
        active.classList.toggle('active');

        // The *changed* part from the nextSlide code
        if (active.previousElementSibling) {
            active.previousElementSibling.classList.toggle('active');
        } else {
            slides[0].classList.toggle('active');
        }
        // End of the changed part

        setTimeout(() => {
            eraser.classList.remove('active');
        }, 200);
    }, eraserActiveTime);
};

next.addEventListener('click', () => {
    nextSlide();
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, intervalTime);
});

prev.addEventListener('click', () => {
    prevSlide();
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, intervalTime);
});