console.clear();

const newUser = {
  firstName: "Jane",
  lastName: "Doe",
};

function generateEmail(obj) {
  // function implementation
  return `${obj.firstName.toLowerCase()}.${obj.lastName.toLowerCase()}@example.com`;
}

function getUserFromEmail(str) {
  if (str.includes("@")) {
    let userObj = str.split("@");
    if (userObj[0].includes(".")) {
      userObj = userObj[0].split(".");
      console.log("we have a guess");
      return { firstName: userObj[0], lastName: userObj[1] };
    } else {
      console.log("no dot in the first part");
      return null;
    }
  } else {
    console.log("no @");
    return null;
  }
}

const inputName1 = document.querySelector('[data-js="name1"]');
const inputName2 = document.querySelector('[data-js="name2"]');
const inputEmail = document.querySelector('[data-js="email"]');

const button1 = document.querySelector('[data-js="button1"]');
const button2 = document.querySelector('[data-js="button2"]');

const output1 = document.querySelector('[data-js="generated-email"]');
const output2 = document.querySelector('[data-js="generated-name"]');

button1.addEventListener("click", (event) => {
  event.preventDefault();
  const userObj = {
    firstName: `${inputName1.value}`,
    lastName: `${inputName2.value}`,
  };
  output1.textContent += `${generateEmail(userObj)}`;
  inputEmail.value = `${generateEmail(userObj)}`;
});

button2.addEventListener("click", (event) => {
  event.preventDefault();
  const userEmail = getUserFromEmail(inputEmail.value);

  output2.textContent += `${userEmail.firstName} ${userEmail.lastName}`;
});

// wakeUP   mc0     wh0
//     good morning
// commute
//     reaching the office
// pretend to work
//     being busy   wh4
// eat lunch        mc1
//     lunch with colleagues!
// pretend to work
// being busy      wh8
// go home
//     going bakc home
// watch Tv
//     lets call it a Day
