function reverseString(str) {
  // split string at each letter
  let splitStr = str.split("");
  // console.log(splitStr);
  // reverse split string
  let reversedSplit = splitStr.reverse();
  // console.log(reversedSplit);
  // join split strings into one string
  let reversedString = reversedSplit.join("");
  // console.log(reversedString);
  return reversedString;

}
console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));;
