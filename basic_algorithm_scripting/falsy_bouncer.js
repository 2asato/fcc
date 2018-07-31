function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let minors = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    // console.log(Boolean(arr[i]));
    if (Boolean(arr[i]) === false) {
      minors = arr.splice(i, 1);
    }
  }
  console.log(minors);
  return arr;
}

bouncer([7, "ate", "", false, 9]);
