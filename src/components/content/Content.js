import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import DefaultPage from '../../pages/defaultPage/DefaultPage';
import mainRoutes from '../../routes/mainRoutes';
import Spinner from '../loader/Loader';

const Content = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        {mainRoutes.map(({ path, exact, component: MyComponent }) => (
          <Route
            path={path}
            exact={exact}
            key={path}
            render={() => <MyComponent />}
          />
        ))}
        <Route component={DefaultPage} />
      </Switch>
    </Suspense>
  );
};

export default Content;
