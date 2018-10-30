import axios from 'axios'

const api_url = 'http://localhost:3000/api/v1/wishlist';

export function getWishlist() {
  axios.get(api_url)
    .then(json => {
      // console.log(json);
      return json.data.payload;
    })
    .catch(error => console.log(error));
}

export function postWishlistItem(data) {
  axios.post(api_url, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function edittWishlistItem(item_id, data) {
  axios.put(api_url +"/" + item_id, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

