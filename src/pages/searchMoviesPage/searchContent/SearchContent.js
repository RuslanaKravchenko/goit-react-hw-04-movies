import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import SearchContentStyled from './SearchContentStyled';

const SearchContent = ({ movies, query }) => {
  const location = useLocation();
  return (
    <SearchContentStyled>
      <ul className="search-content_list list">
        {movies.map(item => (
          <li className="search-content_item" key={item.id}>
            <Link
              className="search-content_link"
              to={{
                pathname: `/movies/${item.id}`,
                state: {
                  from: location.pathname,
                  movieId: item.id,
                  query: query,
                },
              }}
            >
              <div className="search-content_image-wrapper">
                <img
                  className="search-content_image"
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
              <h3 className="search-content_text">
                {item.name ? item.name : item.title}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </SearchContentStyled>
  );
};
export default SearchContent;
