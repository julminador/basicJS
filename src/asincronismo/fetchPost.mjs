import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

const data = {
  "title": "My own product",
  "price": 15,
  "description": "This product gives you more confidence",
  "categoryId": 5,
  "images": [
    "https://api.lorem.space/image?w=640&h=480&r=6276"
  ]
}

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err))