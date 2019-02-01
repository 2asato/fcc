function truncateString(str, num) {
  // Clear out that junk in your trunk
  let trunc = "";
  if (str.length > num) {
    trunc = str.substring(0, num);
    return trunc + '...'
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);














// function truncateString(str, num) {
//   // Clear out that junk in your trunk
//   let trunct = str.substring(0, num);
//   let finalStr = trunct + '...';
//
//   if (str.length > num) {
//     // return finalStr;
//     console.log(finalStr);
//   } else {
//     // return str;
//     console.log(str);
//   }
// }
//
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);


































// function truncateString(str, num) {
//   // Clear out that junk in your trunk
//   let truncatedStr = "";
//   if (str.length > num) {
//     truncatedStr = str.slice(0, num);
//     console.log(truncatedStr + '...');
//     return truncatedStr + '...';
//   } else {
//     console.log(str);
//     return str;
//   }
// }
// truncateString("A-tisket a-tasket A green and yellow basket", 8);
// // truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
