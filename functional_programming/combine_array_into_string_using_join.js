function sentensify(str) {
  // Add your code below this line
  // convert string to array and exclude nonletters using split
  // convert array back into string with spaces between words using join
  let splitedJoined = str.split(/\s|\W/).join(" ");
  console.log(splitedJoined);
  // Add your code above this line
}
sentensify("May-the-force-be-with-you");
