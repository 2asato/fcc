function factorialize(num) {
  if (num <= 1)
    return 1;
    let fact = factorialize(num - 1);
    let result = num * fact;
    return result;
    console.log(result);

}

console.log(factorialize(10));





function factorialize(num) {
  if (num === 0 || num === 1){
    return 1;
    }
    return num * factorialize(num - 1)
  }

console.log(factorialize(5));
