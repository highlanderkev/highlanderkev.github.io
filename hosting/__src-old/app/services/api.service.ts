import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}

  public get<T>(url: string, params?: any): Observable<HttpEvent<T>> {
    return this.http.get<T>(this.mangleUrl(url, params), this.buildOptions());
  }

  public post<T>(url: string, params: any, queryParams?: any, optHeaders?: any): Observable<HttpEvent<T>> {
    const body = JSON.stringify(params);
    return this.http.post<T>(this.mangleUrl(url, queryParams), body, this.buildOptions());
  }

  public put<T>(url: string, params: any): Observable<HttpEvent<T>> {
    const body = JSON.stringify(params);
    return this.http.put<T>(this.mangleUrl(url, params), body, this.buildOptions());
  }

  public delete<T>(url: string): Observable<HttpEvent<T>> {
    return this.http.delete<T>(this.mangleUrl(url), this.buildOptions());
  }

  private mangleUrl(url: string, params?: any): string {
    return params ? this.appendParams(url, params) : url;
  }

  private appendParams(url: string, params: any = {}) {
    const queryStringEncoded = Object.keys(params).map(p => `${p}=${params[p]}`).join('&');
    return `${url}?${queryStringEncoded}`;
  }

  private buildOptions(optHeaders?: any): any {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (optHeaders) {
      for (let i = 0; i < optHeaders.length ; i++) {
        headers.append( optHeaders[i].key , optHeaders[i].value);
      }
    }
    const options = {
      observe: 'response',
      headers: headers
    };
    return options;
  }
}
