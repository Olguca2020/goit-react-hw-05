import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "280f8dc2e6155dd3de9939081fe0d401";

export const getTrendMovies = async () => {
  return await axios.get(`trending/movie/day?api_key=${API_KEY}`);
};
export const getMovieById = async (movieId) => {
  return await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
};

export const getMovieByQuery = async (query) => {
  return await axios.get(`search/movie?query=${query}&api_key=${API_KEY}`);
};

export const getCreditsMovie = async (movieId) => {
  return await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
};

export const getReviewsMovie = async (movieId) => {
  return await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
};
