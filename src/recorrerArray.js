const articulos = [
  { nombre: "Bici", costo: 300 },
  { nombre: "Tv", costo: 250 },
  { nombre: "Libro", costo: 32 },
  { nombre: "Celular", costo: 1000 },
  { nombre: "Laptop", costo: 2000 },
  { nombre: "Teclado", costo: 50 },
  { nombre: "Audifonos", costo: 170 },
];

console.log("--------------------------------filter--------------------------------");
const articulosFiltrados = articulos.filter((articulo) => { // filter no modifica nuestro array
  return articulo.costo <= 50; // en un nuevo array retorna los articulos que cumplen la condicion
});
console.log(articulosFiltrados);

console.log("--------------------------------map--------------------------------");
const articulosMapeados = articulos.map((articulo) => { // map no modifica nuestro array
  return articulo.nombre; // en un nuevo array retorna de el nombre de todos los articulos
});
console.log(articulosMapeados);

console.log("--------------------------------find--------------------------------");
const articulosEncontrados = articulos.find((articulo) => { // find no modifica nuestro array
  return articulo.nombre === "Laptop"; // retorna la primera coincidencia si se cumple una condicion
});
console.log(articulosEncontrados);

console.log("--------------------------------some--------------------------------");
const algunArticulo = articulos.some((articulo) => {
  return articulo.costo <= 700; // retorna un booleano si se cumple una condicion en alguna iteracion
});
console.log(algunArticulo);

console.log("--------------------------------forEach--------------------------------");
articulos.forEach((articulo) => { // forEach no modifica nuestro array
  console.log(articulo.nombre); // regresa propiedades o valores filtradas
});

console.log("--------------------------------matchAll--------------------------------");
const regex = /\b(Apple)+\b/g;
const fruit = 'Apple, Banana Kiwi, Apple, orange, etc. etc. etc';
for (const match of fruit.matchAll(regex)) { // matchAll funciona como un filtro
  console.log(match);
}