import React from 'react';
import { Link } from 'react-router-dom';
import imagePath from '../../assets/pusheen.jpg';
import DefaultPageStyled from './DefaultPageStyled';

const DefaultPage = () => (
  <DefaultPageStyled>
    <h1 className="default_title">404</h1>
    <img
      className="default_image"
      src={imagePath}
      alt="cat detective"
      width="320"
    />
    <p className="default_text">
      Oops, you seem to be lost. Here is the
      <Link className="default_link" to="/">
        <span>link</span>
      </Link>
      to the home page.
    </p>
  </DefaultPageStyled>
);

export default DefaultPage;
