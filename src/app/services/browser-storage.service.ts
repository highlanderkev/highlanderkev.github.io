import { Injectable } from '@angular/core';

import { environment } from '@environments/environment';

@Injectable()
export class BrowserStorageService {

  private get localStorage() {
    return environment.production ? window.sessionStorage : window.localStorage;
  }

  public getItem(key: string): any {
    return this.localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : null;
  }

  public setItem(key: string, item: any): void {
    this.localStorage.setItem(key, JSON.stringify(item));
  }

  public removeItem(key: string): void {
    this.localStorage.removeItem(key);
  }
}
