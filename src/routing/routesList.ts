import Dashboard from '../pages/Dashboard';
import HomeLanding from '../pages/HomeLanding';
import PageNotFound from '../pages/PageNotFound';
import SingIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Page from './Pages';

export enum RouteLayoutType {
  Authorized,
  SignFlow,
  Public,
  Page404,
}

const routesList = [
  {
    component: HomeLanding,
    path: Page.HOME,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.Public,
  },
  {
    component: SingIn,
    path: Page.SIGN_IN,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.SignFlow,
  },
  {
    component: SignUp,
    path: Page.SIGN_UP,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.SignFlow,
  },

  {
    component: Dashboard,
    path: Page.DASHBOARD,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.Authorized,
  },

  {
    component: PageNotFound,
    path: Page.NOT_FOUND,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.Public,
  },
];

export default routesList;
