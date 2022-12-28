const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2022-01-01'); // evalua la expresion regular
console.table(matchers);