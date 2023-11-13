console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkButton = document.querySelector('[data-js="dark-mode-button"]');
const lightButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

darkButton.addEventListener("click", () => {
  bodyElement.classList.remove("light");
  bodyElement.classList.add("dark");
});

lightButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
  bodyElement.classList.add("light");
});

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
