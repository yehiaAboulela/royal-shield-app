import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicatniosService {
  constructor(private http: HttpClient) {}

  serverUrl: string = 'https://royal-shield.up.railway.app';
  // serverUrl: string = 'http://localhost:3000';

  getToken(): string | null {
    return sessionStorage.getItem('authToken');
  }
  getApplications(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.serverUrl}/applicants`, { headers });
  }
  downloadCV(applicationId: string): Observable<Blob> {
    return this.http.get(`${this.serverUrl}/download/${applicationId}`, {
      responseType: 'blob',
    });
  }
}
