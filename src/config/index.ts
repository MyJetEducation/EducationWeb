export enum configEndpoint {
  authLogin = "authLogin",
  dashboard = "dashboard",
  getKeyValue = "getKeyValue",
  putKeyValue = "putKeyValue",
  delKeyValue = "delKeyValue",
  refreshToken = "refreshToken",
  createAccount = "createAccount",
  allKeysKeyValue = "allKeysKeyValue",
  unit1Text = "unit1Text",
  unit1Test = "unit1Test",
  unit1Video = "unit1Video",
  unit1Case = "unit1Case",
  unit1TrueFalse = "unit1TrueFalse",
  unit1Game = "unit1Game",
  unitSummary = "unitSummary",
  taskTime = "taskTime"
};

const urlServerLogin = new URL(process.env.REACT_APP_APISERVICELOGIN as string);
const urlServerRegister = new URL(process.env.REACT_APP_APISERVICEREGISTER as string);
const urlServerDashBoard = new URL(process.env.REACT_APP_APISERVICEDASHBOARD as string);
const urlServerKeyValueGet = new URL(process.env.REACT_APP_APISERVICEKEYVALUEGET as string);
const urlServerKeyValuePut = new URL(process.env.REACT_APP_APISERVICEKEYVALUEPUT as string);
const urlServerKeyValueDel = new URL(process.env.REACT_APP_APISERVICEKEYVALUEDEL as string);
const urlServerKeyValueAllKeys = new URL(process.env.REACT_APP_APISERVICEKEYVALUEKEYS as string);
const urlServerRefreshToken = new URL(process.env.REACT_APP_APISERVICEKEYREFRESHTOKEN as string);
const unit1Test = new URL(process.env.REACT_APP_APIUNIT1TEST as string);
const unit1Text = new URL(process.env.REACT_APP_APIUNIT1TEXT as string);
const unit1Video = new URL(process.env.REACT_APP_APIUNIT1VIDEO as string);
const unit1Case = new URL(process.env.REACT_APP_APIUNIT1CASE as string);
const unit1Game = new URL(process.env.REACT_APP_APIUNIT1GAME as string);
const unit1TrueFalse = new URL(process.env.REACT_APP_APIUNIT1TRUEFALSE as string);
const urlTaskTime = new URL(process.env.REACT_APP_APITASKTIME as string);
const urlUnitSummary = new URL(process.env.REACT_APP_APIUNITSUMMARY as string);

const config = {
  client: {
    server: {
      protocol: urlServerLogin.protocol,
      host: urlServerLogin.host,
      port: urlServerLogin.port
    },
    endpoint: {
      [configEndpoint.authLogin]: {
        method: "POST",
        uri: {
          pathname: urlServerLogin.pathname
        }
      },
      [configEndpoint.dashboard]: {
        method: "POST",
        uri: {
          pathname: urlServerDashBoard.pathname
        }
      },
      [configEndpoint.getKeyValue]: {
        method: "POST",
        uri: {
          pathname: urlServerKeyValueGet.pathname
        }
      },
      [configEndpoint.putKeyValue]: {
        method: "POST",
        uri: {
          pathname: urlServerKeyValuePut.pathname
        }
      },
      [configEndpoint.delKeyValue]: {
        method: "POST",
        uri: {
          pathname: urlServerKeyValueDel.pathname
        }
      },
      [configEndpoint.refreshToken]: {
        method: "POST",
        uri: {
          pathname: urlServerRefreshToken.pathname
        }
      },
      [configEndpoint.createAccount]: {
        method: "POST",
        uri: {
          pathname: urlServerRegister.pathname
        }
      },
      [configEndpoint.allKeysKeyValue]: {
        method: "POST",
        uri: {
          pathname: urlServerKeyValueAllKeys.pathname
        }
      },
      [configEndpoint.unit1Text]: {
        method: "POST",
        uri: {
          pathname: unit1Text.pathname
        }
      },
      [configEndpoint.unit1Test]: {
        method: "POST",
        uri: {
          pathname: unit1Test.pathname
        }
      },
      [configEndpoint.unit1Video]: {
        method: "POST",
        uri: {
          pathname: unit1Video.pathname
        }
      },
      [configEndpoint.unit1Case]: {
        method: "POST",
        uri: {
          pathname: unit1Case.pathname
        }
      },
      [configEndpoint.unit1TrueFalse]: {
        method: "POST",
        uri: {
          pathname: unit1TrueFalse.pathname
        }
      },
      [configEndpoint.unit1Game]: {
        method: "POST",
        uri: {
          pathname: unit1Game.pathname
        }
      },
      [configEndpoint.unitSummary]: {
        method: "POST",
        uri: {
          pathname: urlUnitSummary.pathname
        }
      },
      [configEndpoint.taskTime]: {
        method: "POST",
        uri: {
          pathname: urlTaskTime.pathname
        }
      }
    }
  }
};

export default config;