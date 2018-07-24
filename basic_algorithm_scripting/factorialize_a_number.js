function factorialize(num) {
  if (num <= 1)
    return 1;
    let fact = factorialize(num - 1);
    let result = num * fact;
    return result;
    console.log(result);

}

console.log(factorialize(10));
