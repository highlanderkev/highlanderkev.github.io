import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as cors from 'cors';
import {Response} from 'express';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://highlanderkev-github-io.firebaseio.com',
});

const corsOptions = {
  origin: true,
};

const corsHandler = cors(corsOptions);

function errorHandler(res: Response) {
  return (error: any): void => {
    console.error(error);
    res.send(500);
  };
}

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', {structuredData: true});
  response.send(`Hello from Firebase! Config value: ${process.env.TEST}\n\n`);
});
