import axios from "axios";

function getBanners() {
  return axios
    .get(`https://localhost:5000/banners`,
    { 
        headers: {
            'Accept': 'application/json'
        }
    })
    .then((response) => response.data);
}

function getCategories() {
  return axios
    .get(`https://localhost:5000/categories`,
    { 
        headers: {
            'Accept': 'application/json'
        }
    })
    .then((response) => response.data);
}

function getProducts() {
    return axios
      .get(`https://localhost:5000/products`,
      { 
          headers: {
              'Accept': 'application/json'
          }
      })
      .then((response) => response.data);
  }

export { getBanners, getCategories, getProducts };