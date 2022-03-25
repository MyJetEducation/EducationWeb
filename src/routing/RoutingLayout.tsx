import React, { FC } from 'react';
import routesList, { RouteLayoutType } from './routesList';
import RouteWrapper from './RouteWrapper';
import { useLocation, matchPath, Switch, useHistory } from 'react-router-dom';
import AuthorizedContainer from '../containers/AuthorizedContainer';
import { FlexContainer } from '../styles/FlexContainer';
import { useStores } from '../hooks/useStores';
import { Observer } from 'mobx-react-lite';
import Page from './Pages';
import { Redirect } from 'react-router-dom';
import PublicContainer from '../containers/PublicContainer';

const RoutingLayout: FC = () => {
  const location = useLocation();
  const { push } = useHistory();
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
  } else {
    push(Page.NOT_FOUND);
  }

  switch (layoutType) {
    case RouteLayoutType.Authorized:
      return (
        <AuthorizedContainer>
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
        </AuthorizedContainer>
      );

    case RouteLayoutType.SignFlow:
      return (
        <FlexContainer height="100%" width="100%">
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
        </FlexContainer>
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
