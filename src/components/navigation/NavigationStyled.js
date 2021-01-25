import styled from 'styled-components';

const NavigationStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  align-items: center;
  height: 64px;
  padding-right: 24px;
  padding-left: 24px;

  color: #fff;
  background-color: #122438;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  .header_list {
    display: flex;
  }

  .item:not(:last-child) {
    margin-right: 30px;
  }

  .header_link {
    text-decoration: none;
    padding: 5px 10px;
    font-size: 20px;
    color: lightgrey;
    border: 1px solid transparent;
    border-radius: 20px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: #ff6b09;
      border: 1px solid #ff6b09;
      border-radius: 20px;
    }
  }

  .active_link {
    color: #ff6b09;
  }
`;

export default NavigationStyled;
