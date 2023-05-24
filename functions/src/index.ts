import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as cors from 'cors';
import axios from 'axios';
import {Response} from 'express';

// import {angularApp} from './angular-server';
import * as Koa from 'koa';
import * as Router from '@koa/router';
import * as staticFiles from 'koa-static';
import {nodeResolve} from 'koa-node-resolve';
import {Readable} from 'stream';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://highlanderkev-github-io.firebaseio.com',
});

const corsOptions = {
  origin: true,
};

const corsHandler = cors(corsOptions);

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  ctx.type = 'text/html';
  const ssr = await import('@lit-labs/ssr/lib/render-result-readable.js');
  const litRender = await import('./lit-render');
  ctx.body = new ssr.RenderResultReadable(litRender.renderIndex({name: 'Kevin'}));
});

app.use(router.routes());
app.use(nodeResolve());
app.use(staticFiles('.'));

export const api = functions.https.onRequest(app.callback() as any);

// export const ssr = functions.https.onRequest(angularApp());

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
