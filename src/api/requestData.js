import { GraphQLClient } from "graphql-request";

async function requestData(query, vars = {}) {
  const endpoint = "https://graphql.datocms.com/";

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    },
  });

  return await client.request(query, vars);
}

export default requestData;
