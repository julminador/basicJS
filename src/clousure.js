// Las clousures recuerdadn las variabales a las que podian acceder por mas que se las invoque desde otro lugar
const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(`%c Error: ${myGlobal} `, 'background:black; color: red;');

  function parent() {
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }

    return child();
  }

  return parent();
}

myFunction();