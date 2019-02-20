function telephoneCheck(str) {
  // Good luck!
  let phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  console.log(phoneNumber.test(str));
}

telephoneCheck("555 555 5555");

// formats that pass
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555


// not passing if starts with a 1
// not passing if theres unwanted character mixed in
