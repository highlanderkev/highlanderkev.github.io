import { Environment } from "./environment.model";

export const environment: Environment = {
  production: false,
  API_URL: {
    BASE_URL: '',
    FUNCTIONS_URL: '',
  },
  github: {
    api: {
      baseURL: '',
      graphURL: ''
    },
  },
  firebase: {
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  },
  sentry: {
    dsn: ''
  }
};
