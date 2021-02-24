import styled from 'styled-components';

const MovieDetailsPageStyled = styled.div`
  padding: 20px 15px;
  @media (min-width: 768px) {
    padding: 30px 34px;
  }

  .details_btn {
    display: block;
    padding: 8px 20px;
    margin-bottom: 30px;
    border-radius: 2px;
    background-color: #fff;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    color: #ff6b09;
    border: 1px solid #ff6b09;
    border-radius: 30px;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  .details_btn:hover,
  .details_btn:focus {
    background-color: #ff6b09;
    color: #fff;
  }

  .details_wrapper {
    @media (min-width: 768px) {
      display: flex;
      margin-bottom: 20px;
    }
  }

  .details_image {
    width: 300px;
    margin-right: 20px;

    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }

  .details_title {
    margin-bottom: 20px;
  }
  .details_title-text {
    margin-right: 7px;
  }

  .details_vote {
    margin-right: 10px;
    margin-bottom: 10px;
    & span {
      font-weight: 700;
      color: #ff6b09;
    }
  }

  .details_overview-title,
  .details_genres-title {
    margin-bottom: 5px;
  }

  .details_overview-text {
    margin-bottom: 20px;
  }
  .details_genres-list {
    display: flex;

    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
  .details_genres-item {
    margin-right: 10px;
    padding: 7px 7px;
    color: #5e6671;
    border: 1px solid #ff6b09;
    border-radius: 20px;

    @media (min-width: 768px) {
      padding: 5px 10px;
    }
  }

  .details-nav_list {
    display: flex;
    margin-bottom: 20px;
  }

  .details-nav_link {
    font-weight: 700;
    text-decoration: none;
    padding: 5px 10px;
    font-size: 20px;
    color: #122438;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: #ff6b09;
    }
  }

  .details-nav_active-link {
    color: #ff6b09;
    border-bottom: 1px solid #ff6b09;
  }
`;

export default MovieDetailsPageStyled;
