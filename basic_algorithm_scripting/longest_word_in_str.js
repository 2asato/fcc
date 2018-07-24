function findLongestWordLength(str) {
  let strLength = [];
  let maxLength = 0;
  let splitStr = str.split(" ");
  // console.log(splitStr);
  for (let i = 0; i < splitStr.length; i++) {
    strLength.push(splitStr[i].length);
    // console.log(strLength);
    maxLength = Math.max(...strLength);
    // console.log(maxLength);
  }
  console.log(maxLength);
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");



// fcc solution
// for(var i = 0; i < myWords.length; i++){
//   if(longest < myWords[i].length){
//     longest = myWords[i].length;
//   }
// }
