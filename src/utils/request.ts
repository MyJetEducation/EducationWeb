import config from "../config";
import URL from 'url';

async function req(endpoint: string, query: any) {
  let body = null;
  const configEndpoint = config.client.endpoint[endpoint as keyof typeof config.client.endpoint];
  const url = {
    query: {},
    ...config.client.server,
    ...configEndpoint?.uri,
  };
  if (configEndpoint.method === "POST" || configEndpoint.method === "PUT") {
    body = JSON.stringify({
      ...query,
    })
  } else if (configEndpoint.method === "GET") {
    url.query = {...url.query, ...query}
  }
  const data = await fetch(URL.format(url), {
    method: configEndpoint.method,
    body,
    headers:{
      Accept: 'application/json',
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
  }).then(res => res.json());

  return data;
}

export default req;