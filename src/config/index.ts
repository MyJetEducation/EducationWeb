export enum configEndpoint {
  authLogin = "authLogin",
  dashboard = "dashboard",
  getKeyValue = "getKeyValue",
  putKeyValue = "putKeyValue",
  delKeyValue = "delKeyValue",
  refreshToken = "refreshToken",
  createAccount = "createAccount",
  allKeysKeyValue = "allKeysKeyValue",
  unitText = "unitText",
  unitTest = "unitTest",
  unitVideo = "unitVideo",
  unitCase = "unitCase",
  unitTrueFalse = "unitTrueFalse",
  unitGame = "unitGame",
  unitSummary = "unitSummary",
  taskTime = "taskTime",
  progressAllStatsBlock = "progressAllStatsBlock",
  tutorials = "tutorials",
  inRetryDate = "inRetryDate",
  inRetryCount = "inRetryCount",
  inRetryTime = "inRetryTime",
  confirm = "confirm",
  getUserInfo = "getUserInfo",
  inRetryAttempts = "inRetryAttempts",
  getAchievements = "getAchievements",
  userTimeGet = "userTimeGet",
  userTimeLog = "userTimeLog"
};

const urlHostServer = new URL(process.env.REACT_APP_APIHOST as string);
const config = {
  client: {
    server: {
      protocol: urlHostServer.protocol,
      host: urlHostServer.host,
      port: urlHostServer.port
    },
    endpoint: {
      [configEndpoint.authLogin]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/auth/login"
        }
      },
      [configEndpoint.createAccount]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/register/create"
        }
      },
      [configEndpoint.dashboard]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/education/dashboard/tutorial"
        }
      },
      [configEndpoint.getKeyValue]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/keyvalue/get"
        }
      },
      [configEndpoint.putKeyValue]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/keyvalue/put"
        }
      },
      [configEndpoint.delKeyValue]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/keyvalue/delete"
        }
      },
      [configEndpoint.refreshToken]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/auth/refresh-token"
        }
      },
      [configEndpoint.allKeysKeyValue]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/keyvalue/keys"
        }
      },
      [configEndpoint.unitText]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/education/{tutorial}/{unit}/text"
        }
      },
      [configEndpoint.unitTest]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/education/{tutorial}/{unit}/test"
        }
      },
      [configEndpoint.unitVideo]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/education/{tutorial}/{unit}/video"
        }
      },
      [configEndpoint.unitCase]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/education/{tutorial}/{unit}/case"
        }
      },
      [configEndpoint.unitTrueFalse]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/education/{tutorial}/{unit}/truefalse"
        }
      },
      [configEndpoint.unitGame]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/education/{tutorial}/{unit}/game"
        }
      },
      [configEndpoint.unitSummary]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/education/{tutorial}/state"
        }
      },
      [configEndpoint.taskTime]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/time/task-time/get"
        }
      },
      [configEndpoint.progressAllStatsBlock]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/education/dashboard/progress"
        }
      },
      [configEndpoint.tutorials]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/education/dashboard/tutorials"
        }
      },
      [configEndpoint.inRetryDate]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/retry/use-bydate"
        }
      },
      [configEndpoint.inRetryAttempts]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/retry/count"
        }
      },
      [configEndpoint.inRetryCount]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/retry/use-bycount"
        }
      },
      [configEndpoint.inRetryDate]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/retry/use-bydate"
        }
      },
      [configEndpoint.confirm]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/register/confirm"
        }
      },
      [configEndpoint.getUserInfo]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/useraccount/get"
        }
      },
      [configEndpoint.getAchievements]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/userprofile/achievements"
        }
      },
      [configEndpoint.userTimeGet]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/time/user-time/get"
        }
      },
      [configEndpoint.userTimeLog]: {
        method: "POST",
        uri: {
          pathname: "/api/v1/time/user-time/log"
        }
      }
    }
  }
};

export default config;