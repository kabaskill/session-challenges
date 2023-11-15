console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(event.target));

  console.log(data);

  console.log();
  console.log(+data["age"] + +data["badness"]);

  event.target.reset();
  event.target["firstName"].focus();
});
