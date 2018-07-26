function titleCase(str) {
  let splitStr = str.split(" ");
  let upperCased = [];
  let newStr = "";
  // console.log(splitStr);
  for (let i = 0; i < splitStr.length; i++) {
    // console.log(splitStr[i]);
    upperCased.push(splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1).toLowerCase());
    newStr = upperCased.toString().replace(/,/g, ' ');
    console.log(newStr);
  }
  return newStr;
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
