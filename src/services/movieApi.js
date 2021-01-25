import axios from 'axios';
const baseURL = 'https://api.themoviedb.org';
const key = 'b2806bde5d54c9a9935955933e2a05c8';

const fetchMoviesInTrending = () => {
  return axios
    .get(`${baseURL}/3/trending/movie/day?api_key=${key}`)
    .then(response => response.data.results)
    .catch(error => error);
};

const fetchMoviesWithQuery = (searchQuery, page) => {
  return axios
    .get(
      `${baseURL}/3/search/movie?api_key=${key}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`,
    )
    .then(response => response.data.results)
    .catch(error => error);
};

const fetchMovieById = id => {
  return axios
    .get(`${baseURL}/3/movie/${id}?api_key=${key}&language=en-US`)
    .then(response => response.data)
    .catch(error => error);
};

const fetchMovieCastById = id => {
  return axios
    .get(`${baseURL}/3/movie/${id}/credits?api_key=${key}&language=en-US`)
    .then(response => response.data)
    .catch(error => error);
};

const fetchMovieReviewsById = id => {
  return axios
    .get(
      `${baseURL}/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`,
    )
    .then(response => response.data)
    .catch(error => error);
};

export {
  fetchMoviesInTrending,
  fetchMoviesWithQuery,
  fetchMovieById,
  fetchMovieCastById,
  fetchMovieReviewsById,
};
