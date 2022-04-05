const API_LIST = {
  KEY_VALUE: {
    GET: '/api/v1/keyvalue/get',
    UPDATE: '/api/v1/keyvalue/put',
    DELETE: '/api/v1/keyvalue/delete',
    LIST: '/api/v1/keyvalue/keys',
  },

  USER_ACCOUNT: {
    GET: '/api/v1/useraccount/get',
    UPDATE: '/api/v1/useraccount/put',
  },

  DASHBOARD: {
    TUTORIALS_LIST: '/api/v1/education/dashboard/tutorials',
    TUTORIAL: '/api/v1/education/dashboard/tutorial',
    PROGRESS: '/api/v1/education/dashboard/progress',
  },

  USER_PROFILE: {
    PROGRESS: '/api/v1/userprofile/progress',
    STATUS: '/api/v1/userprofile/status',
    ACHIEVEMENTS: '/api/v1/userprofile/achievements',
  },

  USER_TIMER: {
    GET_TOKEN: '/api/v1/time/user-time/get',
    LOG: '/api/v1/time/user-time/log',
  },
};

Object.freeze(API_LIST);

export default API_LIST;
