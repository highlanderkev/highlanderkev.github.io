import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { browserLocalPersistence, initializeAuth, provideAuth } from '@angular/fire/auth';

import { environment } from '@environments/environment';
import { getApp } from 'firebase/app';
import { browserPopupRedirectResolver, getAuth } from 'firebase/auth';

declare const FIREBASE_API_KEY: string;

@NgModule({
  imports: [
    AngularFireModule.initializeApp({
      apiKey: FIREBASE_API_KEY,
      ...environment.firebase,
    }),
    provideAuth(() => {
      if(typeof document !== 'undefined') {
        return initializeAuth(getApp(), {
          persistence: browserLocalPersistence,
          popupRedirectResolver: browserPopupRedirectResolver,
        })
      }
      return getAuth(getApp())
    }),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    AngularFireStorageModule,
  ],
  exports: [
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    AngularFireStorageModule,
  ],
  providers: [
  ]
})
export class FirebaseModule {}
