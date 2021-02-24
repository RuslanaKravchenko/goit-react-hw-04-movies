import styled from 'styled-components';

const NavigationStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  width: 100%;
  z-index: 1100;
  display: flex;
  align-items: center;
  height: 64px;
  padding-right: 10px;
  padding-left: 10px;

  color: #fff;
  background-color: #122438;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  @media (min-width: 768px) {
    padding-right: 24px;
    padding-left: 24px;
  }

  .header_list {
    display: flex;
  }

  .item {
    padding: 5px 10px;
    border: 1px solid transparent;
    border-radius: 20px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      border: 1px solid #ff6b09;
      border-radius: 20px;
    }

    &:not(:last-child) {
      margin-right: 10px;
      @media (min-width: 768px) {
        margin-right: 30px;
      }
    }
  }

  .header_link {
    text-decoration: none;

    font-size: 20px;
    color: lightgrey;

    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      color: #ff6b09;
    }
  }

  .active_link {
    color: #ff6b09;
  }
`;

export default NavigationStyled;
