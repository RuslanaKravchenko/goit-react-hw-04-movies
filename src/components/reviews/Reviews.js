import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovieReviewsById } from '../../services/movieApi';
import ReviewsWrapper from './ReviewsStyled';

const Reviews = () => {
  const [state, setState] = useState({});
  const location = useLocation();

  useEffect(() => {
    fetchMovieReviewsById(location.state.movieId).then(result => {
      setState({ ...result });
    });
    // eslint-disable-next-line
  }, []);

  const { results } = state;

  return (
    <ReviewsWrapper>
      {!results || (!results.length && <h2>We don't have any reviews yet</h2>)}
      <ul className="reviews_list list">
        {results &&
          results.map(item => (
            <li className="reviews_item" key={item.id}>
              <h3 className="reviews_autor">{item.author}</h3>
              <p className="reviews_text">{item.content}</p>
            </li>
          ))}
      </ul>
    </ReviewsWrapper>
  );
};

export default Reviews;
