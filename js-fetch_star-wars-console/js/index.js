console.clear();

const url = "https://swapi.dev/api/people/";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const myData = await fetchData();

console.log("🚀  fetchData():", myData); //whole data

console.log("🚀  myDataPeople:", myData.results); //just the people

console.log("🚀  myDataR2D2:", myData.results[2].eye_color); //color of r2d2's eye
