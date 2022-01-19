export enum configEndpoint {
  authLogin = "authLogin",
  createAccount = "createAccount",
  getKeyValue = "getKeyValue",
  putKeyValue = "putKeyValue"
};

const urlServer = new URL(process.env.REACT_APP_APISERVICELOGIN as string);
console.log("####: urlServer", urlServer);
const config = {
  client: {
    server: {
      protocol: urlServer.protocol,
      host: urlServer.host,
      port: urlServer.port
    },
    endpoint: {
      [configEndpoint.authLogin]: {
        method: "POST",
        uri: {
          pathname: urlServer.pathname
        }
      },
      [configEndpoint.createAccount]: {
        method: "POST",
        uri: {
          pathname: "/api/register/v1/create"
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