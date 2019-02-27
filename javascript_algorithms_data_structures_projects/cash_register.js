function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let amountPerDenomination = 0;
  let totalInDrawer = 0;
  let moneyArr = [];
  for (let i = 0; i < cid.length; i++) {
    for (let j = 0; j < cid[i].length; j++) {
      amountPerDenomination = cid[i][1];
    }
    moneyArr.push(amountPerDenomination)
  }
  totalInDrawer = moneyArr.reduce(function(a, b) {
    return a + b;
  });
  console.log(totalInDrawer);
}
  // Here is your change, ma'am.
  // return change;

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20,
  [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]);
