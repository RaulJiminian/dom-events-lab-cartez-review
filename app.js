/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
// const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector("#calculator"); /// ---> adding event listeners
const display = document.querySelector(".display"); /// ---> adding event listeners

let num1 = "";
let num2 = "";
let operator = "";

calculator.addEventListener("click", (e) => {
  const currentElement = e.target; 

  if (currentElement.classList.contains("number")) {
    if (operator === "") {
      num1 += currentElement.innerText;
      display.innerText = num1;
    } else {
      num2 += currentElement.innerText;
      display.innerText = num2;
    }
  }

  if (currentElement.classList.contains("operator")) {
    if (operator === "") {
      operator = currentElement.innerText;
    }

    if (currentElement.innerText === "C") {
      num1 = "";
      num2 = "";
      operator = "";
      display.innerText = "";
    }
  }

  if (currentElement.classList.contains("equals")) {
    if (operator === "*") {
      display.innerText = parseInt(num1) * parseInt(num2);
    } else if (operator === "/") {
      display.innerText = parseInt(num1) / parseInt(num2);
    } else if (operator === "-") {
      display.innerText = parseInt(num1) - parseInt(num2);
    } else {
      display.innerText = parseInt(num1) + parseInt(num2);
    }
  }
});x