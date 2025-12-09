import { inject, Injectable } from '@angular/core';
import { SubjectRequest } from '../../models/requests/subject.request';
import { HttpClient, HttpParameterCodec, HttpParams, httpResource, HttpResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { SubjectResponse } from '../../models/response/subject.response';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {

  private httpClient = inject(HttpClient);
  private readonly API_URL = environment.API_URL;
  private encoder!: HttpParameterCodec;

  add(request: SubjectRequest): Observable<SubjectResponse> {
    return this.httpClient.post<SubjectResponse>(`${this.API_URL}/subjects`, request);
  }

  update(id: string, request: SubjectRequest): Observable<SubjectResponse> {
    return this.httpClient.put<SubjectResponse>(`${this.API_URL}/subjects/${id}`, request);
  }

  getById(id: string): Observable<SubjectResponse> {
    return this.httpClient.get<SubjectResponse>(`${this.API_URL}/subjects/${id}`);
  }

  getAll(query?: string, page?: number, pageSize?: number): Observable<HttpResponse<SubjectResponse[]>> {

    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (query !== undefined && query !== null) {
      localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, <any>query, 'q');
    }

    if (page !== undefined && pageSize !== undefined) {
      localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, page + 1, '_page');
      localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, pageSize, '_limit');
    }

    return this.httpClient.get<SubjectResponse[]>(`${this.API_URL}/subjects`, {
      params: localVarQueryParameters,
      observe: 'response',
    });
  }

  delete(id: string): Observable<SubjectResponse> {
    return this.httpClient.delete<SubjectResponse>(`${this.API_URL}/subjects/${id}`);
  }

  subjects = httpResource<SubjectResponse[]>(() => `${this.API_URL}/subjects`);


  private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
    if (typeof value === "object" && value instanceof Date === false) {
      httpParams = this.addToHttpParamsRecursive(httpParams, value);
    } else {
      httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
    }
    return httpParams;
  }

  private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
    if (value == null) {
      return httpParams;
    }

    if (typeof value === "object") {
      if (Array.isArray(value)) {
        (value as any[]).forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
        } else {
          throw Error("key may not be null if value is Date");
        }
      } else {
        Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(
          httpParams, value[k], key != null ? `${key}.${k!}` : k));
      }
    } else if (key != null) {
      httpParams = httpParams.append(key, value);
    } else {
      throw Error("key may not be null if value is not object or array");
    }
    return httpParams;
  }
}
