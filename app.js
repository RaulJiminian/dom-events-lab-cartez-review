/*
  ✨ Code Review & Refactor Suggestions ✨
  Great job implementing event handling for the calculator! 
  The following improvements help with readability, efficiency, 
  and functionality while keeping everything beginner-friendly. 🚀
*/

/*-------------------------------- Variables --------------------------------*/
// ✅ Variables to store numbers and operator
let num1 = "";
let num2 = "";
let operator = "";

/*------------------------ Cached Element References ------------------------*/
// ✅ Selecting calculator and display elements
const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener("click", (e) => {
  const currentElement = e.target;

  // ✅ Handle number button clicks
  if (currentElement.classList.contains("number")) {
    if (!operator) {
      num1 += currentElement.innerText;
      display.innerText = num1;
    } else {
      num2 += currentElement.innerText;
      display.innerText = num2;
    }
  }

  // ✅ Handle operator button clicks
  else if (currentElement.classList.contains("operator")) {
    if (!operator && currentElement.innerText !== "C") {
      operator = currentElement.innerText;
    }

    // ✅ Handle Clear button functionality
    if (currentElement.innerText === "C") {
      num1 = "";
      num2 = "";
      operator = "";
      display.innerText = "0"; // Display "0" for better UX instead of an empty screen
    }
  }

  // ✅ Handle equals button clicks
  else if (
    currentElement.classList.contains("equals") &&
    num1 &&
    num2 &&
    operator
  ) {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result;

    switch (operator) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      case "/":
        result = number2 !== 0 ? number1 / number2 : "Error"; // Prevent division by zero
        break;
      default:
        result = "Error"; // Handles unexpected cases
    }

    display.innerText = result;

    // ✅ Reset for next calculation
    num1 = result.toString();
    num2 = "";
    operator = "";
  }
});
