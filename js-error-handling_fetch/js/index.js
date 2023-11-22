console.clear();

const userElement = document.querySelector(".user");
const errorElement = document.querySelector(".error");

async function loadUser(url) {
  console.log(url);

  errorElement.innerHTML = "";
  const response = await fetch(url);

  if (!response.ok) {
    console.log("non valid URL");
    errorHandle();
    return null;
  }

  try {
    const json = await response.json();
    const user = json.data;

    userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
  } catch (error) {
    errorHandle();
  }
}

document
  .querySelectorAll("button[data-url]")
  .forEach((button) =>
    button.addEventListener("click", (event) =>
      loadUser(event.target.dataset.url)
    )
  );

function errorHandle() {
  userElement.innerHTML = `<img src="https://media.tenor.com/h5ek52i5ww4AAAAM/oh-no-swag.gif"/>`;
  errorElement.innerHTML = "uh-oh, did the thing!";
}

//   const API_URL = 'https://reqres.in/unknown-page';

// async function getUser() {
//   const response = await fetch(API_URL);
//   if (!response.ok) {
//     console.log('Network error');
//     return null;
//   }
//   try {
//     const parsedJSON = await response.json();
//     return parsedJSON.data;
//   } catch (error) {
//     console.log('Error parsing JSON');
//     return null;
//   }
// }

// async function run() {
//   const user = await getUser();
//   if (!user) {
//     console.log('User not found');
//     return;
//   }
//   console.log(user);
// }

// run();
