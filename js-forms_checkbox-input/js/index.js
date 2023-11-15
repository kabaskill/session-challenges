console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  if (tosCheckbox.value === "off") {
    return;
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

// console.log(tosCheckbox.value);

tosCheckbox.addEventListener("change", () => {
  // console.log("did a thing");

  if (tosCheckbox.value === "on") {
    hideTosError();
  } else {
    showTosError();
  }
});
