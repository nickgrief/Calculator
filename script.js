function operate(operator, a, b) {
  switch (operator) {
    case "+":
      add(a, b);
      break;
    case "-":
      subtract(a, b);
      break;
    case "*":
      multiply(a, b);
      break;
    case "/":
      divide(a, b);
      break;

    default:
      console.log("Incorrect input");
      break;
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let expression = [];
let display = document.querySelector("#display");
let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    expression.push(event.target.textContent);
    display.textContent = expression.join(" ");
  })
  console.log(button.textContent);
})