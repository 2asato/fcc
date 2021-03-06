function telephoneCheck(str) {
  // Good luck!
  let phoneNUm = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
     return phoneNUm.test(str);
  }
  telephoneCheck("555-555-5555");

// ^ denotes the beginning of the string.

// (1\s?)? allows for “1” or “1 ” if there is one.

// \d{n} checks for exactly n number of digits so \d{3} checks for three digits.

// x|y checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either three digits surrounded by parentheses, or three digits by themselves with no parentheses.

// [\s\-]? checks for spaces or dashes between the groups of digits.

// $ denotes the end of the string. In this case the beginning ^ and end of the string $ are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. “s 555 555 5555 3”).


// formats that pass
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555


// not passing if starts with a 1
// not passing if theres unwanted character mixed in
