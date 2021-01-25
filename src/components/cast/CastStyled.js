import styled from 'styled-components';
const CastWrapper = styled.div`
  .cast_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 20px;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }
  .cast_item {
    overflow: hidden;
    margin: 10px 5px;
    padding: 15px;
    width: 220px;
    border-radius: 10px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .cast_image {
    margin: 0 auto 20px;
    height: 175px;
    width: 138px;
  }
  .cast_title {
    text-align: center;
    margin-bottom: 5px;
  }
  .cast_text {
    text-align: center;
    color: #5e6671;
  }

  .cast_btn {
    display: block;
    margin: 0 auto;
    padding: 8px 16px;
    border-radius: 2px;
    background-color: #fff;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    color: #ff6b09;
    border: 1px solid #ff6b09;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    min-width: 180px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  .cast_btn:hover,
  .cast_btn:focus {
    background-color: #ff6b09;
    color: #fff;
  }
`;
export default CastWrapper;
