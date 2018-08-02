function chunkArrayInGroups(arr, size) {
  // Break it up.
  let chunkyMonkey = [];
  for ( i = 0; i < arr.length; i+=size) {
    chunkyMonkey.push(arr.slice(i, i + size));
  }
  console.log(chunkyMonkey);
  return chunkyMonkey;
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
