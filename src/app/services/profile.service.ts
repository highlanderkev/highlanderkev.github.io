import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IProfile } from '@app/models';

@Injectable()
export class ProfileService {
  constructor(private firestore: AngularFirestore) {}

  public getProfile(): any {
    return this.getProfileDocumentFromFirestore();
  }

  private getProfileDocumentFromFirestore(): Observable<IProfile | undefined> {
    return this.firestore.doc<IProfile>('profile/highlanderkev').valueChanges();
  }
}
