import styled from 'styled-components';
import imagePath from '../../assets/pop.png';

const SearchMoviesWrapperStyled = styled.div`
  padding-bottom: 40px;
  min-height: calc(100vh - 138px);
  background-repeat: no-repeat;
  background-position: center, center 50vh;
  background-attachment: fixed;
  background-image: linear-gradient(
      to bottom,
      rgb(255 255 255 / 45%),
      rgb(47 48 58 / 40%)
    ),
    url(${imagePath});

  @media (min-width: 768px) {
    min-height: calc(100vh - 64px);
  }
`;

export default SearchMoviesWrapperStyled;
