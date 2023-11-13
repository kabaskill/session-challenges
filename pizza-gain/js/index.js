console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;

  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  // updateOutputColor(pizzaSize1, pizzaSize2);
  alternateOutputColor(calculatePizzaGain(pizzaSize1, pizzaSize2));
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;

  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  // updateOutputColor(pizzaSize1, pizzaSize2);
  alternateOutputColor(calculatePizzaGain(pizzaSize1, pizzaSize2));
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(d1, d2) {
  const area1 = (d1 / 2) ** 2 * Math.PI;
  const area2 = (d2 / 2) ** 2 * Math.PI;
  const pizzaGain = ((area2 - area1) / area1) * 100;
  output.textContent = Math.round(pizzaGain);
  return pizzaGain; //This line is required for alternate solution
}

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize) {
  newSize = (newSize / 24) * 100 + "px";
  pizzaElement.style.width = newSize;
  // console.log(newSize)
}

// Task 3
// define the function updateOutputColor here

function updateOutputColor(size1, size2) {
  if (size1 > size2) {
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "var(--green)";
  }
}
//Alternative solution - this function uses the calculation from before to determine the color
function alternateOutputColor(gain) {
  if (gain < 0) {
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "var(--green)";
  }
}
