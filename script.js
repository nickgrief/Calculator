function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);

    default:
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
let first = null;
let second = null;
let operator = null;
let display = document.querySelector("#display");
let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    expression.push(event.target.textContent);
    switch (event.target.textContent) {
      case "-":
      case "*":
      case "/":
      case "+":
        if (second != null) {
          let answer = operate(operator, first, second);
          if (Number.isInteger(answer)) {
            first = answer;
          } else {
            first = parseFloat((Math.round(answer * 100) / 100).toFixed(2));
          }
          second = null;
        }
        operator = event.target.textContent;
        break;
      case "equals":
        if (first == null || second == null || operator == null) break;
        let answer = operate(operator, first, second);
        if (Number.isInteger(answer)) {
          first = answer;
        } else {
          first = parseFloat((Math.round(answer * 100) / 100).toFixed(2));
        }
        second = null;
        break;
      case "c":
        display.textContent = "";
        first = null;
        second = null;
        operator = null;
        break;
      case ".":
        if (operator == null) {
          if (first == null || first.indexOf(".") != -1) {
            break;
          } else {
            if (first == Infinity) break;
            first += event.target.textContent;
          }
        } else {
          if (second == null || second.indexOf(".") != -1) {
            break;
          } else {
            second += event.target.textContent;
          }
        }
        break;
      default:
        if (operator == null) {
          if (first == null) {
            first = event.target.textContent;
          } else {
            if (first == Infinity) break;
            first += event.target.textContent;
          }
        } else {
          if (second == null) {
            second = event.target.textContent;
          } else {
            second += event.target.textContent;
          }
        }
        break;
    }
    if (first == null && second == null) {
      display.textContent = "what should i calculate?";
    } else if (second == null && operator == null) {
      display.textContent = first;
    } else if (second == null) {
      display.textContent = first + " " + operator;
    } else {
      display.textContent = first + " " + operator + " " + second;
    }
  });
});
