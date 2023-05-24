import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as cors from 'cors';
import axios from 'axios';
import {Response} from 'express';

import {angularApp} from './angular-server';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://highlanderkev-github-io.firebaseio.com',
});

const corsOptions = {
  origin: true,
};

const corsHandler = cors(corsOptions);

export const ssr = functions.https.onRequest(angularApp());

// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info('Hello logs!', {structuredData: true});
//   response.send(`Hello from Firebase! Config value: ${process.env.TEST}\n\n`);
// });

// export const githubRepos = functions.https.onRequest((req, response: Response) => {
//   return axios({
//     url: 'https://api.github.com/users/highlanderkev/repos',
//     headers: {
//       'User-Agent': 'Request-Promise',
//       'Authorization': `token ${process.env.GH_ACCESS_TOKEN}`,
//     },
//   }).then((res) => {
//     response.send({
//       data: res.data,
//     });
//   }).catch((error) => {
//     console.error(error);
//   });
// });

// export const githubGists = functions.https.onRequest((req, response: Response) => {
//   return axios({
//     url: 'https://api.github.com/users/highlanderkev/gists',
//     headers: {
//       'User-Agent': 'Request-Promise',
//       'Authorization': `token ${process.env.GH_ACCESS_TOKEN}`,
//     },
//   }).then((res) => {
//     response.send({
//       data: res.data,
//     });
//   }).catch((error) => {
//     console.error(error);
//   });
// });
