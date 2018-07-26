function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let jointArr = [];
  jointArr.splice(0, 0,...arr2);
  console.log(jointArr);
  jointArr.splice(n, 0,...arr1);
  console.log(jointArr);
  console.log(arr1);
  console.log(arr2);
  return jointArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
