const promise1 = new Promise((resolve, reject) => reject('Rejecet'));
const promise2 = new Promise((resolve, reject) => resolve('Resolve1'));
const promise3 = new Promise((resolve, reject) => resolve('Resolve2'));

Promise.allSettled([promise1, promise2, promise3])
  .then( response => console.log(response) );

// promise any
Promise.any([promise1, promise2, promise3]) // captura la respuesta de la primera que sea satisfactoria
  .then(response => console.log(response));