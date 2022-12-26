// spread operator
let person = { name: 'Julian', age: 23 };
let county = 'CO'

let data = { ...person, county };
console.log(data);

// rest
function rest(num, ...values) {
    console.log('num: ', num);
    console.log('values:');
    values.forEach(element => {
        console.log(element);
    });
}
rest(21, 0, 1, 2);

// spread
const user = { username: 'julminador', age: 23, county: 'CO' };
const { username, ...values } = user;

console.log(username);
console.log(values);

// fromentries
const entries = new Map([["name", "Oscar"], ["age", 34]]);
console.log(Object.fromEntries(entries));