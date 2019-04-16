import { Injectable } from '@angular/core';
import { Observable, of, from, throwError } from 'rxjs';
import { server } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  // because we use blocking as in loading, the codes needs to run in synchronous mode
  // so we use async await.
  // we can use observables without waiting for the loading to clear
  // in a straightforward client - server app where user need to get the data from server
  // first before doing anything, async-await works

  constructor(private http: HttpClient) {

  }

  // using share() for hot subscription sharing. not used.
  get(url: string, param: any): Observable<any> {
    let baseUrl = server.url + url;
    return this.http.get<any>(baseUrl).pipe(
      catchError(this.handleError<any>('get', []))
    );
  }

  post( url: string, param: any): Observable<any> {
    let baseUrl = server.url + url;
    return this.http.post<any>(baseUrl, param).pipe(
      catchError(this.handleError<any>(url))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}