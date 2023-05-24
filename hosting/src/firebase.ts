import {FirebaseApp, initializeApp} from 'firebase/app';
import {Analytics, getAnalytics, logEvent} from 'firebase/analytics';
import 'firebase/firestore';
import SentryInstance from './sentry';

// const firebaseConfig = {
//   authDomain: 'highlanderkev-github-io.firebaseapp.com',
//   databaseURL: 'https://highlanderkev-github-io.firebaseio.com/',
//   projectId: 'highlanderkev-github-io',
//   storageBucket: 'highlanderkev-github-io.appspot.com',
//   messagingSenderId: '776646251240',
//   appId: '1:776646251240:web:aea3e8be16a28516246f5d'
// }

class FirebaseInstance {
  _firebaseApp: FirebaseApp;
  _firebaseAnalytics: Analytics;

  _firebaseConfig = {
    authDomain: 'highlanderkev-github-io.firebaseapp.com',
    databaseURL: 'https://highlanderkev-github-io.firebaseio.com/',
    projectId: 'highlanderkev-github-io',
    storageBucket: 'highlanderkev-github-io.appspot.com',
    messagingSenderId: '776646251240',
    appId: '1:776646251240:web:aea3e8be16a28516246f5d'
  }

  get firebaseApp(): FirebaseApp {
    if(this._firebaseApp) {
      return this._firebaseApp
    } else {
      try {
        this._firebaseApp = initializeApp({
          apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY || '',
          ...this._firebaseConfig,
        });
        return this._firebaseApp;
      } catch(error) {
        SentryInstance.logError(error);
      }
    }
  }

  get firebaseAnalytics(): Analytics {
    if(this._firebaseAnalytics) {
      return this._firebaseAnalytics;
    } else {
      try {
        this._firebaseAnalytics = getAnalytics(this.firebaseApp);
        return this._firebaseAnalytics;
      } catch(error) {
        SentryInstance.logError(error);
      }
    }
  }

  logEventToFirebase(event: {name: string, details: any}): void {
    logEvent(this.firebaseAnalytics, event.name, event.details);
  }
}

export default new FirebaseInstance();
