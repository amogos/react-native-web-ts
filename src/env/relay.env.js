import AppEnv from './app.env';
import {Environment, Network, RecordSource, Store} from 'relay-runtime';

function fetchQuery(operation, variables) {
  console.log(AppEnv.REACT_APP_GRAPHQL_URL);
  return fetch(AppEnv.REACT_APP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Request-Method': 'POST',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const RelayEnv = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default RelayEnv;
