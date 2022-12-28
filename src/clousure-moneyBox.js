function moneyBox() {
  let saveCoins = 0;

  return function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
}

console.log('****Mine****');
const myMoneyBox = moneyBox();
myMoneyBox(10);
myMoneyBox(4);
myMoneyBox(2);

console.log('****Ana****');
const AnaMoneyBox = moneyBox();
AnaMoneyBox(2);
AnaMoneyBox(5);
AnaMoneyBox(8);