// the global variable
var globalTitle = " Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  // convert to lowercase with toLowerCase()
  // remove all whitespace before and after string with trim()
  // convert to array at all white space with split()
  // convert back to string with - replacing whitespace
  let slug = title.toLowerCase().trim().split(/\s+/g).join("-");
  console.log(slug);
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
