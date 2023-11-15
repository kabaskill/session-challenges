console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
  // console.log("show error");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  if (!tosCheckbox.checked) {
    console.log("tosbox not checked");
    return;
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

// console.log(tosCheckbox.value);

tosCheckbox.addEventListener("change", () => {
  // console.log("did a thing");
  // console.log(tosCheckbox.checked);
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});
