function sumAll(arr) {
  let sorted = arr.sort(function(a, b) {
    return a - b;
    return sorted
  })
  // console.log(sorted);
  let lowest = sorted[0];
  console.log(lowest);
  let highest = sorted[sorted.length-1];
  console.log(highest);
  let newArr = [];
  while (lowest <= highest) {
    newArr.push(lowest++);
  }
  // console.log(newArr);
  let arrSum = newArr.reduce(function(a, b) {
    return a + b;
  })
  // console.log(arrSum);
  return arrSum;
}

sumAll([1, 4]);


































// function sumAll(arr) {
//   // sort array in ascending order
//   let sorted = arr.sort(function(a, b) {
//     return a - b;
//     return sorted;
//   })
//   // console.log(sorted
//   // created variable for lowest number which is the first number in the array
//   let low = sorted[0];
//   console.log(low);
//   // created variable for highest number which is the last number in array
//   let high = sorted[sorted.length-1];
//   console.log(high);
//   // created new array to store all numbers
//   let digitArray = [];
//   // added numbers to new array while they are higher than low and lower than or equal to high
//   while (low <= high) {
//     digitArray.push(low++);
//   }
//   console.log(digitArray);
//   // get total of all numbers in array
//   let totalSum = digitArray.reduce(function(a, b) {
//     return a + b;
//   })
//   console.log(totalSum);
// }
//
// sumAll([5, 10]);
