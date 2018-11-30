function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.unshift(num);
  console.log(arr);
  arr.sort(function(a, b) {return a-b});
  console.log(arr);
  console.log(arr.indexOf(num));
}

getIndexToIns([2, 5, 10], 15);

// add number
// sort array
// get index of number



































// function getIndexToIns(arr, num) {
//   // Find my place in this sorted array.
//   let pushed = arr.push(num);
//   // console.log(pushed);
//   console.log(arr);
//   let sorted = arr.sort(function(a, b){return a - b});
//   console.log(sorted);
//   let indexNum= arr.indexOf(num);
//   console.log(indexNum);
//   return indexNum;
// }
//
// // getIndexToIns([60, 40], 50);
// // getIndexToIns([10, 20, 30, 40, 50], 35);
// // getIndexToIns([5, 3, 20, 3], 5)
// getIndexToIns([2, 5, 10], 15);
