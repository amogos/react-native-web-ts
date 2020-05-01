import {Platform} from 'react-native';

const LOCAL_HOST = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';
const GRAPHQL_PRODUCTION_URL = 'https://betterreads.prod/graphql';
const GRAPHQL_DEVELOPMENT_URL = 'https://betterreads.dev/graphql';
const GRAPHQL_LOCAL_URL = `https://${LOCAL_HOST}/graphql`;

const allConfigs = {
  local: {
    REACT_APP_GRAPHQL_URL: GRAPHQL_LOCAL_URL,
  },
  test: {
    REACT_APP_GRAPHQL_URL: GRAPHQL_LOCAL_URL,
  },
  development: {
    REACT_APP_GRAPHQL_URL: GRAPHQL_DEVELOPMENT_URL,
  },
  production: {
    REACT_APP_GRAPHQL_URL: GRAPHQL_PRODUCTION_URL,
  },
};

const target = process.env.NODE_ENV || 'local';
//const target = 'local';
const REACT_APP_GRAPHQL_URL = allConfigs[target].REACT_APP_GRAPHQL_URL;

export default {
  REACT_APP_GRAPHQL_URL,
};
