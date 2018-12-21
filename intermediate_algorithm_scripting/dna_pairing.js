function pairElement(str) {
  // turn str into arr
  let strArr = str.split("");
  let subArr = [];
// console.log(strArr);
  // loop thru arr
  for (let i = 0; i < strArr.length; i++) {
    // console.log(strArr[i]);
    console.log(strArr[i + 1]);
    // if (strArr[i] === 'G') {
    //   strArr.splice();
    //   console.log(strArr);
    // }
  }
  // if g return c, c return g, t return a, a return t
  // put pair into own array
  // put all arrays into one array
  return str;
}

pairElement("GCG");
