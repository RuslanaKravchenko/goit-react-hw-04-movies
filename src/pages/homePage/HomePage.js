import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMoviesInTrending } from '../../services/movieApi';
import HomePageStyled from './HomePageStyled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchMoviesInTrending().then(response => {
      setMovies([...response]);
    });
  }, []);

  return (
    <HomePageStyled>
      <h2 className="home-page_title">Trending Movies</h2>
      <ul className="home-page_list list">
        {movies.map(item => (
          <li key={item.id} className="home-page_item">
            <Link
              className="home_link"
              to={{
                pathname: `/movies/${item.id}`,
                state: {
                  from: location.pathname,
                  movieId: item.id,
                },
              }}
            >
              <div className="search-content_image-wrapper">
                <img
                  className="home-page_image"
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
                      : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
                  }
                  alt={item.alt}
                  width="300"
                  height="450"
                />
              </div>

              <h3 className="home-page_text">{item.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </HomePageStyled>
  );
};
export default HomePage;
