import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
  return fetch(urlApi);
}

fetchData(`${API}/products`)
  .then(res => res.json())
  .then(products => {
    return fetchData(`${API}/products/${products[0].id}`)
  })
  .then(res => res.json())
  .then(product => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`)
  })
  .then(res => res.json())
  .then(category => console.log(category.name))
  .catch(err => console.error(err));