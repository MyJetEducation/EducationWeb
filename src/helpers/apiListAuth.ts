const AUTH_API_LIST = {
  AUTH: {
    SIGN_IN: '/api/v1/auth/login',
    REFRESH_TOKEN: '/api/v1/auth/refresh-token',
  },
  REGISTER: {
    SIGN_UP: '/api/v1/register/create',
    REGISTER_CONFIRM: '/api/v1/register/confirm',
    RECOVERY_PASSWORD: '/api/v1/register/recovery',
    CHANGE_PASSWORD: '/api/v1/register/change',
  },
};

Object.freeze(AUTH_API_LIST);
export default AUTH_API_LIST;
