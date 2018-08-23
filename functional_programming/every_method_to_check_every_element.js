function checkPositive(arr) {
  // Add your code below this line
  // use every() to check if all elements are positive
  let checked = arr.every(function(element) {
    return element > 0;
  })
  console.log(checked);
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
