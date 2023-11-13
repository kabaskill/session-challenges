console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
const bookTitle = "The Lord of JavaScript";
const author = "Mario";
let rating;
let numberOfSales;
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--
logBookData(bookTitle, author, 4.2, 120);

logBookDataVersion2(bookTitle, author, 4.2, 120);

numberOfSales = 122;
logBookData(bookTitle, author, 4.2, numberOfSales);
logBookDataVersion2(bookTitle, author, 4.2, numberOfSales);

numberOfSales = 124;
logBookData(bookTitle, author, 4.2, numberOfSales);
logBookDataVersion2(bookTitle, author, 4.2, numberOfSales);
// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--
function logBookData(title, author, rating, salesNumber) {
  console.log(title, author, rating, salesNumber);
}

//Alternate solution
function logBookDataVersion2(title, author, rating, salesNumber) {
  let data = `${title}, ${author}, ${rating}, ${salesNumber}`;
  console.log(data);
}
// --^-- write your code here --^--
