import styled from 'styled-components';

const SearchContentStyled = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;

  .search-content_list {
    @media (min-width: 768px) {
      display: grid;
      max-width: calc(100vw - 48px);
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      grid-gap: 20px;
      margin-top: 0;
      margin-bottom: 0;
      padding: 0;
      list-style: none;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .search-content_item {
    width: 300px;
    background-color: #fff;
    overflow: hidden;
    margin: 0 auto;
    padding-bottom: 15px;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media (max-width: 767px) {
      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }

    &:hover {
      transform: scale(1.03);
      cursor: zoom-in;
    }
  }

  .search-content_link {
    text-decoration: none;
    color: inherit;
    text-align: center;
  }

  .search-content_image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    height: 450px;
    overflow: hidden;
  }

  .search-content_text {
    padding: 0 10px;
  }

  .search-content_item:hover .search-content_text {
    color: #ff6b09;
  }
`;

export default SearchContentStyled;
