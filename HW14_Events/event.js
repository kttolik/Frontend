const modal = document.getElementById('myModal');
const img = document.getElementById('myImg');
const modalImg = document.getElementsByClassName("slides");
const closeBtn = document.getElementsByClassName("close")[0];
const controls = document.querySelectorAll('.controls');
const slides = document.querySelectorAll('#slides .slide');
const pauseButton = document.getElementById('pause');
let playing = true;
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);

function myFunction(imgs) {
    let expandImg = document.getElementById("expandedImg");
    let imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

const slideIndex = 0;

function addListener(id, eventType, callback) {
    const node = document.getElementById(id);
    if (node) {
        node.addEventListener(eventType, callback);
    }
}

img.onclick = function () {
    modal.style.display = "block";
}

closeBtn.onclick = function () {
    modal.style.display = "none";
}

//slide show

for (let i = 0; i < controls.length; i++) {
    controls[i].style.display = 'inline-block';
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
}


function pauseSlideshow() {
    pauseButton.innerHTML = '&#9658;'; // play character
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
    playing = true;
    slideInterval = setInterval(nextSlide, 2000);
}

pauseButton.onclick = function () {
    if (playing) {
        pauseSlideshow();
    } else {
        playSlideshow();
    }
};



