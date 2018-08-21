function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line
  let sliced = anim.slice(beginSlice, endSlice);
  console.log(sliced);
  return sliced;
  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
