// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  // for loop
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] % 2 === 1)
  //   newArray.push(s[i]);
  // }
  // forEach()
  s.forEach(function(item) {
    if (callback(item)) newArray.push(item)
  // Add your code above this line
});
  console.log(newArray);
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
