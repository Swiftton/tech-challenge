import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export const enum REQUEST_METHODS {
  HTTP_GET = 'get',
  HTTP_POST = 'post'
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /**
   * Constructor
   *
   * @param [HttpClient] http
   */
  constructor(
    private http: HttpClient
  ) { }


  /**
   * Get request headers
   *
   * @returns [HttpHeaders]
   */
  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return headers;
  }

  /**
   * Get response
   *
   * @param [Observable<any>] httpObservable
   * @returns [Observable<any>]
   */
  private getResponse(
    httpObservable: Observable<any>
  ): Observable<any> {
    return httpObservable.pipe(
      map(
        (response: HttpResponse<any>) => response && response.body ? response.body : response
      ),
      catchError(e => this.handleError(e))
    );
  }

  /**
   * Error handler
   *
   * @param [HttpErrorResponse] error
   */
  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  /**
   * Make http request
   *
   * @param [string] url
   * @param [string] httpMethod
   * @param [Object] body
   * @returns [Observable<any>]
   */
  makeRequest(
    url: string,
    httpMethod: string,
    body: Object = null
  ): Observable<any> {
    const requestUrl = environment.apiUrl + url;
    const requestBody = body;
    const httpOptions: any = {
      headers: this.getHeaders(),
      observe: 'response'
    };

    let httpObservable: Observable<any>;

    switch (httpMethod) {
      case REQUEST_METHODS.HTTP_GET:
        httpObservable = this.http.get(requestUrl, httpOptions);
        break;
      case REQUEST_METHODS.HTTP_POST:
        httpObservable = this.http.post(requestUrl, requestBody, httpOptions);
        break;
    }

    return this.getResponse(httpObservable);
  }
}
