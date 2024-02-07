import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "280f8dc2e6155dd3de9939081fe0d401";

export const getTrendMovies = async () => {
  return await axios.get(`trending/movie/day?api_key=${API_KEY}`);
};
