import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { environment } from '@environments/environment';

declare const FIREBASE_API_KEY: string;

@NgModule({
  imports: [
    AngularFireModule.initializeApp({
      apiKey: FIREBASE_API_KEY,
      ...environment.firebase,
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
