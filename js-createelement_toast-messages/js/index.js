console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

let postCounter = 0;
let lastPost;

addButton.addEventListener("click", (event) => {
  // Exercise: Append a new entry to the toast messages container
  event.preventDefault();

  const newToast = document.createElement("li");
  postCounter++;
  newToast.classList.add("toast-container__message");

  // newToast.setAttribute("data-js", `post-${postCounter}`);

  newToast.textContent = `I am Toast Message ${postCounter}`;
  toastContainer.append(newToast);

  lastPost = newToast;
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";

  toastContainer.append(lastPost);
});
