function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  // create new array with contents of arr2
  let sliced2 = arr2.slice();
  // console.log(sliced2);
  // add each element off arr1 into sliced2
  for (let i = 0; i < arr1.length; i++) {
    sliced2.splice(n, 0, arr1[i])
    // increases n, changing the index place of element being added
    n++;
    // console.log(sliced2);
  }
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);


































// function frankenSplice(arr1, arr2, n) {
//   // It's alive. It's alive!
//   let jointArr = [];
//   jointArr.splice(0, 0,...arr2);
//   console.log(jointArr);
//   jointArr.splice(n, 0,...arr1);
//   console.log(jointArr);
//   console.log(arr1);
//   console.log(arr2);
//   return jointArr;
// }
//
// frankenSplice([1, 2, 3], [4, 5, 6], 1);
