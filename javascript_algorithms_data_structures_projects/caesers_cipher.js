function rot13(str) { // LBH QVQ VG!
  let caesered = [];
  let codeNum = 0;
  let convertedNum = 0;
  let split = str.split("");
  let converted = "";
  console.log(split);
  for (let i = 0; i < split.length; i++) {
    // console.log(split[i]);
    codeNum = split[i].charCodeAt();
    console.log(split[i] + codeNum);
    if (codeNum >= 65 && codeNum < 78) {
      convertedNum = codeNum + 13
      converted = String.fromCharCode(convertedNum);
      // console.log(converted);
      caesered.push(converted);
      // console.log(caesered);
    } else if (codeNum <= 90 && codeNum >= 78) {
      convertedNum = codeNum -13;
      converted = String.fromCharCode(convertedNum);
      // console.log(converted);
      caesered.push(converted);
      // console.log(caesered);
    } else if (codeNum < 65 || codeNum > 90) {
      converted = String.fromCharCode(codeNum);
      console.log(converted);
      caesered.push(converted);
      console.log(caesered);
    }
    let joined = caesered.join("");
    console.log(joined);
  }
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
