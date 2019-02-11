function titleCase(str) {
  let split = str.split(" ");
  console.log(split);
  let capitaled = split.map(word => word.charAt(0).toUpperCase() + word.slice(1))
  console.log(capitaled);
  let titled = capitaled.join(" ");
  console.log(titled);
  // return str;
}

titleCase("I'm a little tea pot");












// function titleCase(str) {
//   let lowerCased = str.toLowerCase();
//   console.log(lowerCased);
//   let splitted = lowerCased.split(" ");
//   console.log(splitted);
//   let firstUpper = splitted.map(word => word.charAt(0).toUpperCase() + word.slice(1))
//   console.log(firstUpper);
//   let sentence = firstUpper.join(" ");
//   console.log(sentence);
//   // return str;
// }
//
// titleCase("I'm a little tea pot");

















// function titleCase(str) {
//   strArr = str.split(" ");
//   console.log(strArr);
//   capt = strArr.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
//   console.log(capt);
//   finalStr = capt.join(" ");
//   console.log(finalStr);
// }
//
// titleCase("I'm a little tea pot");


































// function titleCase(str) {
//   let splitStr = str.split(" ");
//   let upperCased = [];
//   let newStr = "";
//   // console.log(splitStr);
//   for (let i = 0; i < splitStr.length; i++) {
//     // console.log(splitStr[i]);
//     upperCased.push(splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1).toLowerCase());
//     newStr = upperCased.toString().replace(/,/g, ' ');
//     console.log(newStr);
//   }
//   return newStr;
// }
//
// titleCase("I'm a little tea pot");
// titleCase("sHoRt AnD sToUt");
