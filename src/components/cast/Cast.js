import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovieCastById } from '../../services/movieApi';
import CastWrapper from './CastStyled';

const Cast = () => {
  const [state, setState] = useState({});
  const location = useLocation();

  const getMovieCast = async id => {
    const result = await fetchMovieCastById(id);

    setState({ ...result, castToShow: result.cast.slice(0, 10) });
  };
  useEffect(() => {
    getMovieCast(location.state.movieId);
    // eslint-disable-next-line
  }, []);

  const showAllCast = () => {
    setState(prevState => ({ ...prevState, castToShow: [...prevState.cast] }));
  };

  const { castToShow, cast } = state;

  return (
    <CastWrapper>
      <ul className="cast_list list">
        {castToShow &&
          castToShow.map(item => (
            <li className="cast_item" key={item.cast_id}>
              <img
                className="cast_image"
                src={
                  item.profile_path
                    ? `https://www.themoviedb.org/t/p/w138_and_h175_face/${item.profile_path}`
                    : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
                }
                alt={`${item.name}`}
                width="138"
                height="175"
              />
              <h3 className="cast_title">{item.name}</h3>
              <p className="cast_text">Character: {item.character}</p>
            </li>
          ))}
      </ul>
      {castToShow && cast.length !== castToShow.length && (
        <button className="cast_btn" type="button" onClick={showAllCast}>
          Show all
        </button>
      )}
    </CastWrapper>
  );
};

export default Cast;
