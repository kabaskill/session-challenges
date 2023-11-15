console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const data = Object.fromEntries(new FormData(event.target));
  const num1 = +document.querySelector("#number-a").value;
  const num2 = +document.querySelector("#number-b").value;

  // console.log(data);

  if (data["operator"] === "addition") {
    result = add(num1, num2);
  } else if (data["operator"] === "subtraction") {
    result = subtract(num1, num2);
  } else if (data["operator"] === "multiplication") {
    result = multiply(num1, num2);
  } else if (data["operator"] === "division") {
    result = divide(num1, num2);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
