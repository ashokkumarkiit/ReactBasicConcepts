import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 7b1695101c28afa276a79b76175cc91dffdfad929f389cf14d6e105c804f873a'
  }
});
