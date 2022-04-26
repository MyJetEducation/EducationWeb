const AUTH_API_LIST = {
  AUTH: {
    SIGN_IN: '/auth/v1/trader/AuthenticateW2',
    REFRESH_TOKEN: '/auth/v1/trader/RefreshToken',
    SIGN_OUT: '/auth/v1/trader/Logout',
  },
  REGISTER: {
    SIGN_UP: '/auth/v1/trader/Register',
    REGISTER_CONFIRM: '/api/v1/register/confirm',
    RECOVERY_PASSWORD: '/auth/v1/trader/ForgotPassword',
    CHANGE_PASSWORD: '/api/v1/register/change',
  },
};

Object.freeze(AUTH_API_LIST);
export default AUTH_API_LIST;
