import AccountSettings from '../pages/Account/AccountSettings';
import Achievements from '../pages/Account/Achievements';
import Payments from '../pages/Account/Payments';
import Profile from '../pages/Account/Profile';
import Referrals from '../pages/Account/Referrals';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import HomeLanding from '../pages/HomeLanding';
import AboutUsPage from '../pages/InfoPages/AboutUsPage';
import FaqPage from '../pages/InfoPages/FaqPage';
import LessonsPage from '../pages/InfoPages/LessonsPage';
import MissionPage from '../pages/InfoPages/MissionPage';
import WhyUsPage from '../pages/InfoPages/WhyUsPage';
import Market from '../pages/Market';
import Notes from '../pages/Notes';
import PageNotFound from '../pages/PageNotFound';
import RegisterConfirm from '../pages/RegisterConfirm';
import ResetPassord from '../pages/ResetPassord';
import SingIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Tools from '../pages/Tools';
import ToolsInner from '../pages/ToolsInner';
import Page from './Pages';

export enum RouteLayoutType {
  NotAuthorizedPublic,
  Authorized,
  SignFlow,
  Public,
  Page404,
}

const routesList = [
  // -
  {
    component: AboutUsPage,
    path: Page.PUBLIC.ABOUT_US,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.NotAuthorizedPublic,
  },
  {
    component: MissionPage,
    path: Page.PUBLIC.MISSION,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.NotAuthorizedPublic,
  },
  {
    component: WhyUsPage,
    path: Page.PUBLIC.WHY_US,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.NotAuthorizedPublic,
  },
  {
    component: LessonsPage,
    path: Page.PUBLIC.LESSONS,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.NotAuthorizedPublic,
  },

  {
    component: FaqPage,
    path: Page.PUBLIC.FAQ,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.NotAuthorizedPublic,
  },
  // ----
  {
    component: RegisterConfirm,
    path: Page.REGISTER_CONFIRM,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.SignFlow,
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
    component: ForgotPassword,
    path: Page.FORGOT_PASSWORD,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.SignFlow,
  },
  {
    component: ResetPassord,
    path: Page.RESET_PASSWORD,
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

  // inner pages
  {
    component: Dashboard,
    path: Page.DASHBOARD,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.Authorized,
  },

  {
    component: ToolsInner,
    path: Page.INNER.TOOL_INNER,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.Authorized,
  },
  {
    component: Tools,
    path: Page.INNER.TOOL,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.Authorized,
  },

  {
    component: Notes,
    path: Page.INNER.NOTES,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.Authorized,
  },

  {
    component: Market,
    path: Page.INNER.MARKET,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.Authorized,
  },

  // account
  {
    component: Profile,
    path: Page.ACCOUNT.PROFILE,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.Authorized,
  },
  {
    component: Achievements,
    path: Page.ACCOUNT.ACHIEMENTS,
    exact: false,
    strict: true,
    layoutType: RouteLayoutType.Authorized,
  },
  {
    component: AccountSettings,
    path: Page.ACCOUNT.SETTINGS,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.Authorized,
  },
  {
    component: Payments,
    path: Page.ACCOUNT.PAYMENTS,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.Authorized,
  },
  {
    component: Referrals,
    path: Page.ACCOUNT.REFERRALS,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.Authorized,
  },
  // account

  // END inner pages

  {
    component: PageNotFound,
    path: Page.NOT_FOUND,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.Public,
  },

  {
    component: HomeLanding,
    path: Page.HOME,
    exact: true,
    strict: true,
    layoutType: RouteLayoutType.NotAuthorizedPublic,
  },
];

export default routesList;
