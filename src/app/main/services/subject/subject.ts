import { inject, Injectable } from '@angular/core';
import { SubjectRequest } from '../../models/requests/subject.request';
import { HttpClient, httpResource } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { SubjectResponse } from '../../models/response/subject.response';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {

  private httpClient = inject(HttpClient);
  private readonly API_URL = environment.API_URL;

  add(request: SubjectRequest): Observable<SubjectResponse> {
    return this.httpClient.post<SubjectResponse>(`${this.API_URL}/subjects`, request);
  }

  update(id: string, request: SubjectRequest): Observable<SubjectResponse> {
    return this.httpClient.put<SubjectResponse>(`${this.API_URL}/subjects/${id}`, request);
  }

  getById(id: string): Observable<SubjectResponse> {
    return this.httpClient.get<SubjectResponse>(`${this.API_URL}/subjects/${id}`);
  }

  getAll(): Observable<SubjectResponse[]> {
    return this.httpClient.get<SubjectResponse[]>(`${this.API_URL}/subjects`);
  }

  delete(id: string): Observable<SubjectResponse> {
    return this.httpClient.delete<SubjectResponse>(`${this.API_URL}/subjects/${id}`);
  }

  subjects = httpResource<SubjectResponse[]>(() => `${this.API_URL}/subjects`);
}
