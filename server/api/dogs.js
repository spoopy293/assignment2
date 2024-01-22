export default defineEventHandler((event) => {
  // declare function to fetch data from the dog api
  async function getDogData() {
    // fetch data from the external endpoint
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    // parse the data so JS can read it
    const dogData = await res.json();
    const rawData = await dogData.message;
    // return the data from the function
    const data = Object.keys(rawData);
    return data;
    // return the data from the function
    return dogData;
  }
  // invoke the function and assign it's output to the data variable
  const data = getDogData();
  // return the data at the endpoint
  return data;
});