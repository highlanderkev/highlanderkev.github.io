import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable()
export class ResumeService {
  constructor(private storage: AngularFireStorage) {}

  public getResume() {
    return this.getResumeFromFireStorage();
  }

  private getResumeFromFireStorage() {
    return this.storage.ref('resume.pdf').getDownloadURL();
  }
}
