console.clear();

/*
1. Create the data for a small social media post. 
Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const myTitle = "Title";
const myText = "Text";
let numberOfLikes = 345;
const creator = "Some Person";
let isReported = false;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one 
and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log(myTitle);
console.log(myText);
console.log(numberOfLikes);
console.log(creator);
console.log(isReported);

numberOfLikes++;
console.log(numberOfLikes);
numberOfLikes += numberOfLikes;
console.log(numberOfLikes);

// --^-- write your code here --^--
