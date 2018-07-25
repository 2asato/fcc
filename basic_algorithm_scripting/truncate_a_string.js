function truncateString(str, num) {
  // Clear out that junk in your trunk
  let truncatedStr = "";
  if (str.length > num) {
    truncatedStr = str.slice(0, num);
    console.log(truncatedStr + '...');
    return truncatedStr + '...';
  } else {
    console.log(str);
    return str;
  }
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
