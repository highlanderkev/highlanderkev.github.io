import { Environment } from "./environment.model";

export const environment: Environment = {
  production: true,
  API_URL: {
    BASE_URL: 'https://www.kevinpatrickwestropp.com/',
    FUNCTIONS_URL: 'https://us-central1-highlanderkev-github-io.cloudfunctions.net/',
  },
  github: {
    api: {
      baseURL: 'https://api.github.com/',
      graphURL: 'https://api.github.com/graphql'
    },
  },
  firebase: {
    authDomain: 'highlanderkev-github-io.firebaseapp.com',
    databaseURL: 'https://highlanderkev-github-io.firebaseio.com/',
    projectId: 'highlanderkev-github-io',
    storageBucket: 'highlanderkev-github-io.appspot.com',
    messagingSenderId: '776646251240',
    appId: '1:776646251240:web:aea3e8be16a28516246f5d'
  },
  sentry: {
    dsn: 'https://f9782cd84475463b805a2016133797f3@sentry.io/1773549'
  }
};
