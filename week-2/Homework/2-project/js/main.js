const blueBtn = document.querySelector("#blueBtn").addEventListener("click", makeBlue);
const jumbo = document.querySelector(".jumbotron") 
const primaryBtn = document.querySelector(".jumbotron .btn-primary")
const secondaryBtn = document.querySelector(".jumbotron .btn-secondary")

function makeBlue() {
    changeColor("#588fbd", "#ffa500", "black")
}

const orangeBtn = document.querySelector("#orangeBtn").addEventListener("click", makeOrange);

function makeOrange() {
    changeColor("#f0ad4e", "#5751fd", "#31b0d5")
}
const greenBtn = document.querySelector("#greenBtn").addEventListener("click", makeGreen);

function makeGreen() {
    changeColor("#87ca8a", "black", "#8c9c08")
}

function changeColor(jumboBackground, primaryBackground, secondBackground, secondaryColor = "white") {      
    jumbo.style.backgroundColor = jumboBackground
    primaryBtn.style.backgroundColor = primaryBackground
    secondaryBtn.style.backgroundColor = secondBackground
    secondaryBtn.style.color = secondaryColor;   
}


// Part - 2
document.querySelector('button[type="submit"]').addEventListener('click', (e) => {
    e.preventDefault()
    const email = document.querySelector('#exampleInputEmail1');
    const name = document.querySelector("#example-text-input");
    const description = document.querySelector("#exampleTextarea");

    const isEmailValid = email.value.length > 0 && email.value.includes("@");
    const isNameValid = name.value.length > 0;
    const isDescValid = description.value.length > 0;

    email.style.backgroundColor = isEmailValid ? "" : "red";
    name.style.backgroundColor = isNameValid ? "" : "red";
    description.style.backgroundColor = isDescValid ? "" : "red";

    if (isEmailValid && isEmailValid && isDescValid) {
        alert("Thank you for filling out the form");
        email.value = "";
        name.value = "";
        description.value = "";
    }else {
        return alert("We need more data")
    }
})