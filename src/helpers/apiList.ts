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
};

Object.freeze(API_LIST);

export default API_LIST;
