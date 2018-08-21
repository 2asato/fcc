function nonMutatingSplice(cities) {
  // Add your code below this line
  // return cities.splice(3);
  let sliced = cities.slice(0,3);
  // console.log(sliced);
  return cities;
  // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
