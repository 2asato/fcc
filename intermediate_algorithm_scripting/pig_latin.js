function translatePigLatin(str) {
  let regex = /[aeiou]/gi;
  let pigLatin = "";
  let firstConsonant = ""
  let letterArray = str.split("");
  if (str[0].match(regex)) {
    pigLatin = str + 'way';
  } else if(str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + 'ay';
  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}

translatePigLatin("consonant");
