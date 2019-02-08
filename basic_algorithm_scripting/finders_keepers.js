function findElement(arr, func) {
  // return num;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (func(num)) {
      return num;
    }
  }
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));













// function findElement(arr, func) {
//   let num;
//   // return num;
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       num = arr[i];
//       return num;
//     }
//   }
//   return undefined;






// console.log(findElement([1, 7, 3, 5], num => num % 2 === 0));
































// function findElement(arr, func) {
//   // Make num undefined by default
//   let num;
//
//   // Loop thorugh the array and use the function to check
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       // Store the first case and break the loop
//       num = arr[i];
//       return num;
//     }
//   }
//
//   // otherwise return undefined
//   return num;
// }
//
// // findElement([1, 2, 3, 4], num => num % 2 === 0);
// findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })


// simple solution
// function findElement(arr, func) {
//   filterArr = arr.filter(func); //filter array with the function provided
//
//   return filterArr[0]; //return the first element that returns true, or undefined if no elements return true
// }
