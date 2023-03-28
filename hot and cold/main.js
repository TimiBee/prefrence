let randomNumber;
let formerNumber = null;
let randomUp = [];
let randomDown = [];

//DOM element
const body = document.querySelector("body");
const form = document.querySelector("form");
const number = document.querySelector("#number");
const container = document.querySelector(".container");
const temp = document.querySelector("#temp");
const newGame = document.querySelector("#newGame");
const submitBtn = document.querySelector("#submitBtn")

//event listener
document.addEventListener("DOMContentLoaded",chooseRandomNumber);
form.addEventListener("submit",submitForm);
newGame.addEventListener("click",resetGame);


function chooseRandomNumber(){
    randomUp = [];
    randomDown = [];
    randomNumber = Math.floor(Math.random() * 101);

    for (i = 1; i <= 20; i++) {
        randomUp.push(randomNumber + i);
        randomDown.push(randomNumber - i);
      }
}

function submitForm(e){
    e.preventDefault();


temp.classList.add("temp");

if(number.value == randomNumber){
    temp.innerText = "YES";
    submitBtn.setAttribute("disabled", true);
    return;
}

if (formerNumber) {
if (
    randomUp.includes(+number.value) ||
    randomDown.includes(+number.value)
  ) {
    temp.innerText = "GETTING HOTTER";
    formerNumber = +number.value;
} else {
    temp.innerText = "GETTING COLDER";
    formerNumber = +number.value;
}
return;
}

if (randomUp.includes(+number.value) || randomDown.includes(+number.value)) {
    temp.innerText = "HOT";
    formerNumber = +number.value;
  } else {
    temp.innerText = "COLD";
    formerNumber = +number.value;
  }
}



function resetGame(){
    chooseRandomNumber();
    number.value= "";
    temp.classList.remove("temp");
    temp.innerText = "";
    submitBtn.removeAttribute("disabled");
}