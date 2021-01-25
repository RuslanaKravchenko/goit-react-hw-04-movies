import React, { useState, useEffect, Suspense } from 'react';
import {
  useLocation,
  useHistory,
  useRouteMatch,
  NavLink,
  Switch,
  Route,
} from 'react-router-dom';
import Spinner from '../../components/loader/Loader';
import movieDetailsRoutes from '../../routes/movieDetailsRoutes';
import { fetchMovieById } from '../../services/movieApi';
import MovieDetailsPageStyled from './MovieDetailsPageStyled';

const MovieDetailsPage = () => {
  const [state, setState] = useState({});
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    fetchMovieById(location.state.movieId).then(result => {
      setState({ ...result });
    });

    // eslint-disable-next-line
  }, []);

  const onGoBack = () => {
    history.push({
      pathname: history.location.state.from,
      search: '',
      state: {
        from: location.pathname,
        query: location.state.query,
        page: location.state.page,
      },
    });
  };

  const {
    name,
    title,
    release_date,
    poster_path,
    vote_average,
    overview,
    genres,
  } = state;
  return (
    <MovieDetailsPageStyled>
      <button className="details_btn" type="button" onClick={onGoBack}>
        ⬅ Go back
      </button>
      <div className="details_wrapper">
        <img
          className="details_image"
          src={
            poster_path
              ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`
              : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
          }
          alt={title ? title : name}
          width="600"
          height="900"
        ></img>
        <div>
          <h2 className="details_title">
            <span className="details_title-text">{title ? title : name}</span>(
            {release_date && release_date.slice(0, 4)})
          </h2>
          <p className="details_vote">
            User score: <span>{vote_average * 10}%</span>
          </p>
          <h3 className="details_overview-title">Overview</h3>
          <p className="details_overview-text">{overview}</p>
          <h3 className=" details_genres-title">Genres</h3>
          <ul className=" details_genres-list list">
            {genres &&
              genres.map(item => (
                <li className="details_genres-item" key={item.id}>
                  {item.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <ul className="details-nav_list list">
        <li>
          <NavLink
            className="details-nav_link"
            to={{
              pathname: `${match.url}/cast`,
              state: { ...location.state },
            }}
            exact
            activeClassName="details-nav_active-link"
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            className="details-nav_link"
            to={{
              pathname: `${match.url}/reviews`,
              state: { ...location.state },
            }}
            exact
            activeClassName="details-nav_active-link"
          >
            Reviews
          </NavLink>
        </li>
      </ul>

      <div>
        <Suspense fallback={<Spinner />}>
          <Switch>
            {movieDetailsRoutes.map(
              ({ path, exact, component: MyComponent }) => (
                <Route
                  path={`${match.url}${path}`}
                  exact={exact}
                  key={path}
                  render={() => <MyComponent />}
                />
              ),
            )}
          </Switch>
        </Suspense>
      </div>
    </MovieDetailsPageStyled>
  );
};

export default MovieDetailsPage;
