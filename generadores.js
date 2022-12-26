function* iterate(array) { // los generadores necesitan del * despues de la palabra reservada function
  for (let value of array) {
    yield value; // yield es una palabra reservada para retornar
  }
}

// los generadores recuerdan el estado por esto cada ejecucion usa un next
const it =  iterate(['Julian', 'Oscar', 'David', 'Ana']);
console.log(it.next().value); // Julian
console.log(it.next().value); // Oscar
console.log(it.next().value); // David
console.log(it.next().value); // Ana