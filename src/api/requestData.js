import { GraphQLClient } from "graphql-request";

async function requestData(query) {
  const endpoint = "https://graphql.datocms.com/";

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    },
  });

  return await client.request(query);
}

export default requestData;
