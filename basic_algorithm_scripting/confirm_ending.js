function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (str.substring(str.length - target.length, str.length) === target){
    console.log(true);
    // return true;
  } else {
    console.log(false);
  }
}

confirmEnding("Bastian", "r");


































//   // "Never give up and good luck will find you."
//   // -- Falcor
//   let targetLength = target.length;
//   // console.log(targetLength);
//   let endingToTarget = str.substr(str.length - targetLength);
//   // console.log(endingToTarget);
//   if (target === endingToTarget){
//     console.log(true);
//     return true;
//   } else {
//     console.log(false);
//     return false;
//   }
//   return str;
// }
//
// confirmEnding("Abstraction", "action");
