const API_LIST = {
  VALIDATION: {
    EMAIL_CODE_VERIFY: '/api/v1/email-verification/verify',
    REQUST_VERIFY: '/api/v1/email-verification/request',
  },

  INFO: {
    SESSION_INFO: '/api/v1/info/session-info',
  },

  KEY_VALUE: {
    GET: '/api/v1/edu/keyvalue/get',
    UPDATE: '/api/v1/edu/keyvalue/put',
    DELETE: '/api/v1/edu/keyvalue/delete',
    LIST: '/api/v1/edu/keyvalue/keys',
  },

  USER_ACCOUNT: {
    GET: '/api/v1/edu/useraccount/get',
    UPDATE: '/api/edu/v1/useraccount/put',
  },

  MARKET: {
    GET_TOKENS: '/api/v1/edu/market/tokens',
  },

  DASHBOARD: {
    TUTORIALS_LIST: '/api/v1/edu/dashboard/tutorials',
    TUTORIAL: '/api/v1/edu/dashboard/tutorial',
    PROGRESS: '/api/v1/edu/dashboard/progress',
  },

  USER_PROFILE: {
    PROGRESS: '/api/v1/edu/userprofile/progress',
    STATUS: '/api/v1/edu/userprofile/status',
    ACHIEVEMENTS: '/api/v1/edu/userprofile/achievements',
  },

  USER_TIMER: {
    GET_TOKEN: '/api/v1/edu/time/user-time/get',
    LOG: '/api/v1/edu/time/user-time/log',
  },
};

Object.freeze(API_LIST);

export default API_LIST;
