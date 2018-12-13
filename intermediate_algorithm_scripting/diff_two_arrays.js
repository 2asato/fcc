function diffArray(arr1, arr2) {
  // Same, same; but different.
  let newArr = arr1.concat(arr2);
  console.log(newArr);
  return newArr.filter(x => arr1.indexOf(x) === -1 || arr2.indexOf(x) === -1)
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);





































function diffArray(arr1, arr2) {

  // Same, same; but different.
  // let newArr = arr1.concat(arr2);
  // console.log(newArr);
  // return newArr.filter(x => arr1.indexOf(x) === -1 || arr2.indexOf(x) === -1
  // )
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if ((arr2.indexOf(arr1[i]))=== -1) {
      newArr.push(arr1[i])
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if ((arr1.indexOf(arr2[j]))=== -1) {
      newArr.push(arr2[j])
    }
  }
  console.log(newArr);
}


diffArray([1, 2, 3, 4, 5], [1, 2, 3, 5]);
