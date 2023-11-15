/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied 
into the second input field

2. On button click: The value of the first input field is copied 
in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/
console.clear();
const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button1]");

button.addEventListener("click", () => {
  let value1 = firstInput.value;
  let value2 = secondInput.value;

  value2 = secondInput.value + firstInput.value;
  console.log(value1);
  console.log(value2);
  value2 = value2 + firstInput.value.toUpperCase();
  console.log(value1);
  console.log(value2);

  const x = value1;
  const y = value2;

  firstInput.value = y;
  secondInput.value = x;
  console.log(value1);
  console.log(value2);
});
