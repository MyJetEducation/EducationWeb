export enum configEndpoint {
  authLogin = "authLogin",
  createAccount = "createAccount",
  getKeyValue = "getKeyValue",
  putKeyValue = "putKeyValue"
};

const urlServerLogin = new URL(process.env.REACT_APP_APISERVICELOGIN as string);
const urlServerRegister = new URL(process.env.REACT_APP_APISERVICEREGISTER as string);

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
      [configEndpoint.createAccount]: {
        method: "POST",
        uri: {
          pathname: urlServerRegister.pathname
        }
      },
      [configEndpoint.getKeyValue]: {
        method: "POST",
        uri: {
          pathname: "/api/keyvalue/v1/get"
        }
      },
      [configEndpoint.putKeyValue]: {
        method: "POST",
        uri: {
          pathname: "/api/keyvalue/v1/put"
        }
      }
    }
  }
};

export default config;