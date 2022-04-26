import React, { FunctionComponent, FC } from 'react';
import { Route, Redirect } from 'react-router';
import Page from './Pages';
import { RouteLayoutType } from './routesList';
import { observer } from 'mobx-react-lite';
import { useStores } from '../hooks/useStores';

interface IProps {
  component: FunctionComponent<any>;
  layoutType: RouteLayoutType;
}

type Props = IProps;

const RouteWrapper: FC<Props> = observer((props) => {
  const { component: Component, layoutType, ...otherProps } = props;
  const { mainAppStore } = useStores();

  switch (layoutType) {
    case RouteLayoutType.Public:
      break;
    case RouteLayoutType.Authorized: {
      if (
        !mainAppStore.isLoading &&
        !mainAppStore.isAuthorized &&
        !mainAppStore.token
      ) {
        return <Redirect to={Page.SIGN_IN} />;
      }
      break;
    }

    case RouteLayoutType.NotAuthorizedPublic:
      if (
        mainAppStore.isLoading &&
        mainAppStore.isAuthorized &&
        mainAppStore.token
      ) {
        return <Redirect to={Page.DASHBOARD} />;
      }
      break;

    case RouteLayoutType.SignFlow:
      if (mainAppStore.isAuthorized) {
        return <Redirect to={Page.DASHBOARD} />;
      }
      break;

    default:
      break;
  }

  return (
    <Route
      {...otherProps}
      render={(routeProps) => <Component {...routeProps} />}
    />
  );
});

export default RouteWrapper;
