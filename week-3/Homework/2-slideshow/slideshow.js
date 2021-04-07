// Level 1
const airplanes = [
    "example-screenshots/photo-1562624728-5b0e558c3821.jpeg",
    "example-screenshots/photo-1562624728-945a4565f821.jpeg",
    "example-screenshots/photo-1562624728-f5d4def9670a.jpeg"
]
let actualPosition = 0;
let image; 
let forwardBtn; 
let backBtn; 
let autoBack;
let stopp;
let autoForward;
let interval;

window.onload = setup;

function setup() {
    image = document.getElementById("image");
    image.src = airplanes[actualPosition];
    forwardBtn = document.querySelector("#forwardBtn");
    backBtn = document.querySelector("#backBtn");
    autoBack = document.getElementById("autoBack");
    stopp = document.getElementById("stop");
    autoForward = document.getElementById("autoForward");

    forwardBtn.addEventListener("click", () => nextImage());

    backBtn.addEventListener("click", () => previousImage());

    autoForward.addEventListener("click", () => goAutoForward());
    
    stopp.addEventListener("click", () => stopInterval())

    autoBack.addEventListener("click", () => goAutoForward())
}
 // Functions

function setImage(){
    image.src = airplanes[actualPosition]
}

function nextImage() {
    if (actualPosition >= airplanes.length -1){
        actualPosition = 0;
    }
    else {
        actualPosition ++;
    }
    setImage();
}

function previousImage(){
    if (actualPosition <= 0) {
        actualPosition = airplanes.length - 1;
    }
    else {
        actualPosition --;
    }
    setImage();
}

// Part 2

function goAutoForward(){
    interval = setInterval(nextImage, 2000);
    forwardBtn.setAttribute("disabled", true);
    backBtn.setAttribute('disabled', true);
    stopp.removeAttribute("disabled");
    autoBack.setAttribute("disabled", true);
}

function goAutoBack(){
    interval = setInterval(previousImage, 2000);
    forwardBtn.setAttribute('disabled', true);
    backBtn.setAttribute('disabled', true);
    autoForward.setAttribute('disabled', true);
    stopp.removeAttribute('disabled');
}

function stopInterval(){
    clearInterval(interval);
    forwardBtn.removeAttribute('disabled');
    backBtn.removeAttribute('disabled');
    autoForward.removeAttribute('disabled');
    stopp.setAttribute('disabled', true);
    autoBack.removeAttribute("disabled")
} 

