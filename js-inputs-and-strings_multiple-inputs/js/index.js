/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied 
into the second input field

2. On button click: The value of the first input field is copied 
in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button1 = document.querySelector("[data-js=button1]");
const button2 = document.querySelector("[data-js=button2]");
const button3 = document.querySelector("[data-js=button3]");

button1.addEventListener("click", () => {
  secondInput.value = secondInput.value + firstInput.value;
});

button2.addEventListener("click", () => {
  secondInput.value = secondInput.value + firstInput.value.toUpperCase();
});

button3.addEventListener("click", () => {
  let x = firstInput.value;
  let y = secondInput.value;
  firstInput.value = y;
  secondInput.value = x;
});
