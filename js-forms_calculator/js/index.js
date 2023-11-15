console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

// SCROLL DOWN FOR 'NO IF' SOLUTION. DON'T FORGET
// TO CONSOLE LOG THIS BEFORE LOOKING AT THAT ONE
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

// NO IF SOLUTION THAT DIEGO PROVIDED
// const operations = {
//   addition: (a, b) => a + b,
//   subtraction: (a, b) => a - b,
//   multiplication: (a, b) => a * b,
//   division: (a, b) => a / b,
// };

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   // --v-- write your code here --v--
//   const data = Object.fromEntries(new FormData(event.target));

//   console.log(data);

//   const operation = operations[data.operator];

//   if (!operation) {
//     console.log("Operation not available!");
//     return;
//   }

//   const result = operation(+data.numberA, +data.numberB);

//   // --^-- write your code here --^--

//   resultOutput.textContent = result;
// });
