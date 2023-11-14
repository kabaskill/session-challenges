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
const button = document.querySelector("[data-js=button1]");

button.addEventListener("click", () => {
  secondInput.value = secondInput.value + firstInput.value;
  secondInput.value = secondInput.value.toUpperCase();

  let x = firstInput.value;
  let y = secondInput.value;

  firstInput.value = y;
  secondInput.value = x;
});
