const users = {
  julminador: {
    coutry: 'CO'
  },
  ana: {
    coutry: 'MX'
  }
}

console.log(users.julminador.age); // undefinied
console.log(users.bebeloper?.coutry);

// nullish
const anotherNumber = null;
const validate = anotherNumber ?? 5; // valida si es nulo
console.log(validate);