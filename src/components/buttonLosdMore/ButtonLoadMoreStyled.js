import styled from 'styled-components';
const ButtonWrapper = styled.div`
  .Button {
    display: block;
    margin: 0 auto;
    padding: 8px 16px;
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
    min-width: 180px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  .Button:hover,
  .Button:focus {
    background-color: #ff6b09;
    color: #fff;
  }
`;
export default ButtonWrapper;
