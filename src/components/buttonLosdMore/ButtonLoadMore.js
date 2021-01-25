import React from 'react';
import ButtonWrapper from './ButtonLoadMoreStyled';

const Button = ({ onFetchMovies }) => {
  return (
    <ButtonWrapper>
      <button className="Button" type="button" onClick={onFetchMovies}>
        Load more
      </button>
    </ButtonWrapper>
  );
};

export default Button;
