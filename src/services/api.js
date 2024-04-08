import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3"
})

export const requestMoviesByTrending = async () => {
  const url = '/trending/movie/day?include_adult=false&language=en-US&page=1';
    
    const options = {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTE3ODE5MWZmMDg1OTUwYmQzYjIwNGEwYTBlMDg1ZSIsInN1YiI6IjY0MzFjNTk2MWY5OGQxMDFmNjQ1ZTdmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nIjQeklNXlOzeHtmqvE0mK4xxDQeswZbK-RObK94iXU'
      }
    };

    const {data} = await instance.get(url, options);

  console.log(data);
  return data;
} 

export const requestMoviesByQuery = async (query = "") => {
  const url = `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    
    const options = {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTE3ODE5MWZmMDg1OTUwYmQzYjIwNGEwYTBlMDg1ZSIsInN1YiI6IjY0MzFjNTk2MWY5OGQxMDFmNjQ1ZTdmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nIjQeklNXlOzeHtmqvE0mK4xxDQeswZbK-RObK94iXU'
      }
    };

    const {data} = await instance.get(url, options);

  console.log(data);
  return data;
} 

