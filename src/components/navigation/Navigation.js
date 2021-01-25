import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import NavigationStyled from './NavigationStyled';
import mainRoutes from '../../routes/mainRoutes';

const Navigation = () => {
  const location = useLocation();
  return (
    <NavigationStyled className="header">
      <nav>
        <ul className=" header_list list">
          {mainRoutes.map(
            ({ path, name, exact, renderLink }) =>
              renderLink && (
                <li className="item" key={path}>
                  <NavLink
                    className="header_link"
                    activeClassName="active_link"
                    to={{
                      pathname: path,
                      state: { from: location.pathname },
                    }}
                    exact={exact}
                  >
                    {name}
                  </NavLink>
                </li>
              ),
          )}
        </ul>
      </nav>
    </NavigationStyled>
  );
};

export default Navigation;
