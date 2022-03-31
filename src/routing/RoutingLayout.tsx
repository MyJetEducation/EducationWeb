import React, { FC } from 'react';
import routesList, { RouteLayoutType } from './routesList';
import RouteWrapper from './RouteWrapper';
import { useLocation, matchPath, Switch } from 'react-router-dom';
import AuthorizedContainer from '../containers/AuthorizedContainer';
import { useStores } from '../hooks/useStores';
import { Observer } from 'mobx-react-lite';
import { Redirect } from 'react-router-dom';
import PublicContainer from '../containers/PublicContainer';
import SignFlowContainer from '../containers/SignFlowContainer';
import FullScreenLoader from '../components/Preloader/FullScreenLoader';

const RoutingLayout: FC = () => {
  const location = useLocation();
  const { mainAppStore } = useStores();

  const allRoutes = routesList.map((route) => (
    <RouteWrapper key={route.path} {...route} />
  ));
  const currentRoute = routesList.find((item) => {
    const match = matchPath(location.pathname, item.path);
    return match && match.isExact;
  });

  let layoutType = RouteLayoutType.Page404;

  if (currentRoute) {
    layoutType = currentRoute.layoutType;
  }

  switch (layoutType) {
    case RouteLayoutType.Authorized:
      return (
        <AuthorizedContainer>
          <Observer>
            {() => (
              <>
                <FullScreenLoader isLoading={mainAppStore.isLoading} />
                {!location.search && (
                  <Redirect to={location.pathname.replace(/\/+$/, '')} />
                )}
                <Switch>{allRoutes}</Switch>
              </>
            )}
          </Observer>
        </AuthorizedContainer>
      );

    case RouteLayoutType.SignFlow:
      return (
        <SignFlowContainer>
          {!location.search && (
            <Redirect to={location.pathname.replace(/\/+$/, '')} />
          )}
          <Observer>
            {() => (
              <>
                {!location.search && (
                  <Redirect to={location.pathname.replace(/\/+$/, '')} />
                )}
                <Switch>{allRoutes}</Switch>
              </>
            )}
          </Observer>
        </SignFlowContainer>
      );

    default:
      return (
        <PublicContainer>
          {!location.search && (
            <Redirect to={location.pathname.replace(/\/+$/, '')} />
          )}
          <Observer>
            {() => (
              <>
                {!location.search && (
                  <Redirect to={location.pathname.replace(/\/+$/, '')} />
                )}
                <Switch>{allRoutes}</Switch>
              </>
            )}
          </Observer>
        </PublicContainer>
      );
  }
};

export default RoutingLayout;
