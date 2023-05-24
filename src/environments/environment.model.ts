export interface Environment {
  production: boolean;
  API_URL: {
    BASE_URL: string;
    FUNCTIONS_URL: string;
  };
  github: {
    api: {
      baseURL: string;
      graphURL: string;
    }
  },
  firebase: {
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  },
  sentry: {
    dsn: string;
  }
};
