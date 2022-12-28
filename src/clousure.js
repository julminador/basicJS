// Las clousures recuerdadn las variabales a las que podian acceder por mas que se las invoque desde otro lugar
function crearContador(contador = 0) {
  return {
    incrementar: function() {
      return contador++;
    },
    decrementar: function() {
      return contador--;
    },
    obtenerValor: function() {
      return contador;
    },
  }
}

const contador1 = crearContador(10);
contador1.incrementar();
contador1.incrementar();
contador1.incrementar();
contador1.decrementar();
console.log(contador1.obtenerValor());

const contador2 = crearContador();
contador2.incrementar();
console.log(contador2.obtenerValor());



// tambien es un buena opcion para crear funciones dinamicas
const estilosPorDefecto = 'color: white;'; // esta variable se declara en el entorno lexito externo para ahorrar memoria
function crearImpresoraDeMensajes(tipo, estilos) {
  return function mensaje(str) {
    console.log(`%c ${tipo}: ${str} `, estilosPorDefecto + estilos);
  }
}

const error = crearImpresoraDeMensajes('Error', 'background: red;');
const warning = crearImpresoraDeMensajes('Warning', 'background: orange;');
const exito = crearImpresoraDeMensajes('Exito', 'background: green;');

warning('Esta seguro de continuar?');


// button.addEventListener('click', onClick);
// ...
// button.removeEventListener('click', onClick);


function sumWithClosure(firstNum) {
  return function (secondNum) {
    if (!secondNum) return firstNum;
    else return firstNum + secondNum;
  }
}

// forma de ejecutar con dos parametros
console.log( sumWithClosure(2)(3) ); // 5
console.log( sumWithClosure(90)() ); // 90