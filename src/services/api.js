import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const API_KEY = "b101889254ba0539f51aa4769f4bbe68";
const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTE3ODE5MWZmMDg1OTUwYmQzYjIwNGEwYTBlMDg1ZSIsInN1YiI6IjY0MzFjNTk2MWY5OGQxMDFmNjQ1ZTdmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nIjQeklNXlOzeHtmqvE0mK4xxDQeswZbK-RObK94iXU'
axios.defaults.headers.common["Authorization"] = token;

export const fetchTrendingList = async () => {
  const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  const { results } = response.data;
  console.log(results)
  return results;
};

export const fetchMoviesBySearch = async (query) => {
  const response = await axios.get(
    `/search/movie?query=${query}&api_key=${API_KEY}`
  );
  const { results } = response.data;
  return results;
};

export const fetchMovieById = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  const { cast } = response.data;
  return cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  const { results } = response.data;
  return results;
};

