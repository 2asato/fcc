function largestOfFour(arr) {
  // You can do this!
  let maxArr = [];
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
    maxNum = Math.max(...arr[i]);
    // console.log(maxNum);
    maxArr.push(maxNum);
    // console.log(maxArr);
  }
  console.log(maxArr);
  return maxArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
