import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { environment } from '@environments/environment';

const noopStorage = {
  getItem: (key: string): any => {},
  setItem: (key: string, value: string) => {},
  removeItem: (key: string) => {},
}

@Injectable()
export class BrowserStorageService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object){}

  private get localStorage() {
    if(isPlatformBrowser(this.platformId)) return environment.production ? window.sessionStorage : window.localStorage;
    return noopStorage;
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
