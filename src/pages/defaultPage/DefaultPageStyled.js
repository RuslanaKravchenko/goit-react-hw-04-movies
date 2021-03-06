import styled from 'styled-components';

const DefaultPageStyled = styled.div`
  padding-top: 50px;
  text-align: center;

  .default_title {
    font-size: 60px;
    color: #5e6671;
    margin-bottom: 30px;
  }

  .default_image {
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .default_link {
    color: #ff6b09;
    & span {
      margin: 0 5px;
    }
  }
`;

export default DefaultPageStyled;
