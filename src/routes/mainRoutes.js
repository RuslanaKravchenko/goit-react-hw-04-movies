import { lazy } from 'react';

const mainRoutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(() =>
      import('../pages/homePage/HomePage' /* webpackChunkName: "HomePage"*/),
    ),
    renderLink: true,
  },
  {
    path: '/movies',
    name: 'Search movies',
    exact: true,
    component: lazy(() =>
      import(
        '../pages/searchMoviesPage/SearchMoviesPage' /* webpackChunkName: "SearchMoviesPage"*/
      ),
    ),
    renderLink: true,
  },

  {
    path: '/movies/:movieId',
    name: 'Movies details',
    exact: false,
    component: lazy(() =>
      import(
        '../pages/movieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage"*/
      ),
    ),
    renderLink: false,
  },
];

export default mainRoutes;
