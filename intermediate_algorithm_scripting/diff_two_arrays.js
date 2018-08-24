function diffArray(arr1, arr2) {

  // Same, same; but different.
  let newArr = arr1.concat(arr2);
  console.log(newArr);
  return newArr.filter(x => arr1.indexOf(x) === -1 || arr2.indexOf(x) === -1
  )
}


diffArray([1, 2, 3, 4, 5], [1, 2, 3, 5]);
