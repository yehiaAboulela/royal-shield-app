import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoyalNanoService {
  constructor(private http: HttpClient) {}
  serverUrl: string = 'https://royal-shield.up.railway.app';
  // serverUrl: string = 'http://localhost:3000';
  getToken(): string | null {
    return sessionStorage.getItem('authToken');
  }
  getAppointmets(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.serverUrl}/bookForms`, { headers });
  }
  deleteAppointment(id: string): Observable<any> {
    return this.http.delete(`${this.serverUrl}/bookForm/${id}`);
  }
}
