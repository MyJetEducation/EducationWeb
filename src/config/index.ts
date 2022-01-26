export enum configEndpoint {
  authLogin = "authLogin",
  dashboard = "dashboard",
  getKeyValue = "getKeyValue",
  putKeyValue = "putKeyValue",
  delKeyValue = "delKeyValue",
  refreshToken = "refreshToken",
  createAccount = "createAccount",
  allKeysKeyValue = "allKeysKeyValue"
};

const urlServerLogin = new URL(process.env.REACT_APP_APISERVICELOGIN as string);
const urlServerRegister = new URL(process.env.REACT_APP_APISERVICEREGISTER as string);
const urlServerDashBoard = new URL(process.env.REACT_APP_APISERVICEDASHBOARD as string);
const urlServerKeyValueGet = new URL(process.env.REACT_APP_APISERVICEKEYVALUEGET as string);
const urlServerKeyValuePut = new URL(process.env.REACT_APP_APISERVICEKEYVALUEPUT as string);
const urlServerKeyValueDel = new URL(process.env.REACT_APP_APISERVICEKEYVALUEDEL as string);
const urlServerKeyValueAllKeys = new URL(process.env.REACT_APP_APISERVICEKEYVALUEKEYS as string);
const urlServerRefreshToken = new URL(process.env.REACT_APP_APISERVICEKEYREFRESHTOKEN as string);

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
      }
    }
  }
};

export default config;