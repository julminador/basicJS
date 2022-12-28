class User {
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // metodos
  speak() {
    return 'Hello';
  }

  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  // getters
  get #userAge() { // el hash lo identifica como privado
    return this.age;
  }

  // setters
  set #userAge(n) {
    this.age = n;
  }
};

// instancia
const newUser = new User('Julian', 22);
console.log(newUser.greeting());
// uso de get
console.log(newUser.userAge);
// uso de set
console.log(newUser.userAge = 23);