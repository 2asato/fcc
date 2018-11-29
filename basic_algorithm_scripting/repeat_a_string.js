function repeatStringNumTimes(str, num) {
  // repeat after me
  // create array to store new strings
  let strArr = [];
  // push the string into strArr num times
  for (let i = 0; i < num; i++) {
    strArr.push(str)
  }
  // return strArr;
  // combine strArr into one string
  console.log(strArr.join(""));
}

repeatStringNumTimes("abc", 3);


































// function repeatStringNumTimes(str, num) {
//   // repeat after me
//   let repeated = "";
//   if (num < 0) {
//     console.log("");
//     return "";
//   } else if (num === 1) {
//     console.log(str);
//     return str;
//   } else {
//     console.log(str + repeatStringNumTimes(str, num - 1));
//     return str + repeatStringNumTimes(str, num - 1);
//   }
// }
//
// repeatStringNumTimes("abc", 3);


// repeat method
// function repeatStringNumTimes(str, num) {
//   // repeat after me
//   let repeated = "";
//   if (num > 0) {
//     repeated = str.repeat(num);
//     console.log(repeated);
//     return repeated;
//   } else {
//     return "";
//   }
//   return str;
// }
//
// repeatStringNumTimes("abc", 3);
