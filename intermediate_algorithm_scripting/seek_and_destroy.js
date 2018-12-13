function destroyer(arr) {
  // Remove all the values
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  let args = [];
  args.push(arguments);
  args.shift();
  console.log(args);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
