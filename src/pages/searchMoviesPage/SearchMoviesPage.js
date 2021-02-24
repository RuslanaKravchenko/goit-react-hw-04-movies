import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import SearchForm from './searchForm/SearchForm';
import SearchContent from './searchContent/SearchContent';
import Button from '../../components/buttonLosdMore/ButtonLoadMore';
import Spinner from '../../components/loader/Loader';

import { fetchMoviesWithQuery } from '../../services/movieApi';
import getQueryParams from '../../utils/getQueryParams';
import SearchMoviesWrapperStyled from './SearchMoviesWrapperStyled';

const initialState = {
  movies: [],
  query: '',
  error: null,
  page: 1,
  loading: false,
};

const SearchMoviesPage = () => {
  const [state, setState] = useState({ ...initialState });

  const history = useHistory();
  const location = useLocation();

  const getMovies = async query => {
    try {
      if (query === '') {
        return;
      }

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      const result = await fetchMoviesWithQuery(query);

      await setState(prevState => ({
        ...prevState,
        movies: [...result],
        query: query,
        page: 2,
      }));
      history.push({
        ...history,
        search: `?query=${query}`,
      });
    } catch (error) {
      setState(prevState => ({ ...prevState, error: error }));
    }
  };

  useEffect(() => {
    try {
      if (location.search) {
        const { query: nextQuery } = getQueryParams(location.search);

        getMovies(nextQuery);
      }

      if (!location.state) {
        return;
      } else {
        location.state.query && getMovies(location.state.query);
      }
    } catch (error) {
      setState(prevState => ({ ...prevState, error: error }));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMore = async () => {
    const { query, page } = state;
    try {
      setState(prevState => ({ ...prevState, loading: true }));

      const result = await fetchMoviesWithQuery(query, page);
      setState(prevState => ({
        ...prevState,
        movies: [...prevState.movies, ...result],
        page: prevState.page + 1,
      }));

      scrollBy();
    } catch (error) {
      setState(prevState => ({ ...prevState, error: error }));
    } finally {
      setState(prevState => ({ ...prevState, loading: false }));
    }
  };

  const scrollBy = () => {
    window.scrollBy({
      top:
        document.documentElement.clientHeight -
        document.querySelector('.Button').clientHeight -
        document.querySelector('.header').clientHeight,
      behavior: 'smooth',
    });
  };
  const { movies, query, loading } = state;

  return (
    <>
      <SearchForm onSubmit={getMovies} />
      <SearchMoviesWrapperStyled>
        {movies.length > 0 && <SearchContent movies={movies} query={query} />}
        {movies.length > 0 && <Button onFetchMovies={loadMore} />}
      </SearchMoviesWrapperStyled>
      {loading && <Spinner />}
    </>
  );
};

export default SearchMoviesPage;
