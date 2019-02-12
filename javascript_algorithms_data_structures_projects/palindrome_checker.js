function palindrome(str) {
  // Good luck!
  // set to all lower case
  let lowered = str.toLowerCase();
  // remove all nonalphanumeric characters
  let alpha = lowered.replace(/[^0-9a-z]/gi, '');
  console.log(alpha);
  // reverse the string alpha
  let reversed = alpha.split("").reverse().join("");
  console.log(reversed);
  // compare if the strings reversed and alpha are the same
  if (reversed === alpha) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}



palindrome("race car");
