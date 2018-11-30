function mutation(arr) {
  str0 = arr[0].toLowerCase();
  str1 = arr[1].toLowerCase().split("");

  for (let i = 0; i < str1.length; i++) {
    if (str0.indexOf(str1[i]) === -1) {
      console.log(false);
    }
  }
  console.log(true);
}

mutation(["hello", "hey"]);


































// function mutation(arr) {
//   arr[0] = arr[0].toLowerCase();
//   console.log(arr[0]);
//   arr[1] = arr[1].toLowerCase().split("");
//   console.log(arr[1]);
//   for (let i = 0; i < arr[1].length; i++) {
//     if (arr[0].indexOf(arr[1][i]) === -1) {
//       return false;
//     }
//   }
//   return true;
// }
//
// mutation(["hello", "hey"]);
