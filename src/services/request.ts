import config, {configEndpoint as configEndpointEnum} from "../config";
import URL from 'url';

const getHeader = (token: string | null) => {
  const header: { Accept: string, 'Content-Type': string, Authorization?: string } = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
  if (token) {
    header.Authorization = `Bearer ${token}`;
  }
  return header
}

async function req(endpoint: string, query: any) {
  let body: any = null;
  const configEndpoint = config.client.endpoint[endpoint as keyof typeof config.client.endpoint];
  const url = {
    query: {},
    ...config.client.server,
    ...configEndpoint?.uri,
  };
  if (typeof query === "object") {
    const pathname = Object.keys(query).reduce((acc, val) => {
      if (acc.indexOf(`{${val}}`) !== -1) {
        const result = acc.replace(`{${val}}`, query[val as keyof typeof query]);
        delete query[val as keyof typeof query];
        return result;
      }
      return acc;
    }, url.pathname);
    url.pathname = pathname
  }

  if (configEndpoint.method === "POST" || configEndpoint.method === "PUT") {
    if (typeof query === "object") {
      body = JSON.stringify({
        ...query,
      })
    } else {
      body = JSON.stringify(query)
    }

  } else if (configEndpoint.method === "GET") {
    url.query = {...url.query, ...query}
  }

  try {
    const data = await fetch(URL.format(url), {
      method: configEndpoint.method,
      body,
      headers: getHeader(localStorage.getItem("token"))
    }).then(async (res) => {
      if (res.status === 401) {
        const refreshToken = localStorage.getItem("refreshToken");
        const refreshConfigEndPoint = config.client.endpoint[configEndpointEnum.refreshToken];
        const refreshUrl = {
          ...config.client.server,
          ...refreshConfigEndPoint?.uri,
        };
        if (refreshToken) {
          try {
            const newToken = await fetch(URL.format(refreshUrl), {
              method: refreshConfigEndPoint.method,
              body: JSON.stringify(refreshToken),
              headers: getHeader(null)
            }).then(res => {
              if (res.status !== 200) {
                throw {status: 401, message: "Refresh Token not exist"}
              }
              return res.json()
            });
            localStorage.setItem("token", newToken.data.token)
            localStorage.setItem("refreshToken", newToken.data.refreshToken)
            const newData = await fetch(URL.format(url), {
              method: configEndpoint.method,
              body,
              headers: getHeader(newToken.data.token)
            }).then(res => res.json());
            return newData;
          } catch (error) {
            return error
          };
        }
      }
      return res.json()
    });
    if (data.status === 401) {
      throw data
    }
    return data;
  } catch (error: any) {
    localStorage.removeItem("token")
    localStorage.removeItem("refreshToken")
    return {
      status: 500,
      message: error.message
    }
  };
}

export default req;