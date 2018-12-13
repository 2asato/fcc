function translatePigLatin(str) {
  let regex = /[aeiou]/gi;
  let pigLatin = "";
  let firstConsonant = ""
  let letterArray = str.split("");
  if (str[0].match(regex)) {
    pigLatin = str + 'way';
  } else {
    firstConsonant = letterArray.shift();
    // console.log(firstConsonant);
    // console.log(letterArray);
    pigLatin = letterArray.concat(firstConsonant + 'ay').join("");
    console.log(pigLatin);
  }
}

translatePigLatin("consonant");
