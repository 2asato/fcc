function convertToRoman(num) {
  let numbers = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  let romanNums = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  let romaned = "";
  for (let i = 0; i < romanNums.length; i++) {
    while (numbers[i] <= num) {
      romaned += romanNums[i];
      num -= numbers[i];
    }
  }
 return romaned;
}
console.log(convertToRoman(36)
);
