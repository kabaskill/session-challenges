console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

receivedPassword === SUPER_SECRET_PASSWORD
  ? console.log("Welcome! You are logged in as Brunhilde1984.")
  : console.log("Access denied!");

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

number % 2 === 0 ? console.log("even number") : console.log("odd number");

// Part 3: Hotdogs
const numberOfHotdogs = 34;
let hotdogPrice = 2;

if (5 <= numberOfHotdogs && numberOfHotdogs < 100) {
  hotdogPrice = 1.5;
} else if (100 <= numberOfHotdogs && numberOfHotdogs < 1000000) {
  hotdogPrice = 1;
} else if (numberOfHotdogs >= 1000000) {
  hotdogPrice = 0.1;
}

console.log(hotdogPrice);

let hotDog2 = 2;

if (numberOfHotdogs < 5) {
  hotDog2 = 2;
} else if (numberOfHotdogs < 100) {
  hotDog2 = 1.5;
} else if (numberOfHotdogs < 1000000) {
  hotDog2 = 1;
} else if (1000000 < numberOfHotdogs) {
  hotDog2 = 0.1;
}
console.log(hotDog2 + " dollars");

let hotDog3 =
  numberOfHotdogs < 5
    ? 2
    : numberOfHotdogs < 100
    ? 1.5
    : numberOfHotdogs < 1000000
    ? 1
    : numberOfHotdogs >= 1000000
    ? 0.1
    : 2;

console.log(hotDog3 + " Euros");

let x = 3;
let y;

switch (true) {
  case x < 100:
    y = 10;

  case x < 10:
    y = 20;

  case x < 5:
    y = 50;
    break;
  default:
    y = 30;
}
console.log(y);

// Part 4: Daytime
const currentHour = 17;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const name = "Felix";

const greeting = "Hello " + (name == "Felix" ? "Coach" : name) + "!";

console.log(greeting);
