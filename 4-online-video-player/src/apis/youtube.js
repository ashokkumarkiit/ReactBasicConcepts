import axios from 'axios';

const KEY = 'AIzaSyAoA1_YI_JPOMh0Y9BeKhxzHUjxoLLidlQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY,
  }
});
