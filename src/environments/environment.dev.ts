// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { Environment } from "./environment.model";

export const environment: Environment = {
  production: false,
  API_URL: {
    BASE_URL: 'http://localhost:5000/highlanderkev-github-io/us-central1/',
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
