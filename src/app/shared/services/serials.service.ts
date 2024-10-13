import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SerialService {
  constructor(private http: HttpClient) {}

  serverUrl: string = 'https://royal-shield.up.railway.app';
  // serverUrl: string = 'http://localhost:3000';

  getToken(): string | null {
    return sessionStorage.getItem('authToken');
  }
  getSerials(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.serverUrl}/viewSerials`, { headers });
  }

  addSerial(serial: any): Observable<any> {
    return this.http.post(`${this.serverUrl}/addSerial`, serial);
  }
  deleteSerial(serial: string): Observable<any> {
    return this.http.post(`${this.serverUrl}/deleteSerial`, {
      serialNumber: serial,
    });
  }

  serialCheck(serial: any): Observable<any> {
    return this.http.post(`${this.serverUrl}/checkSerial`, serial);
  }

  warrantyActivation(warrantyForm: any): Observable<any> {
    return this.http.post(`${this.serverUrl}/activation`, warrantyForm);
  }

  getActivatedWarrantys(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.serverUrl}/activatedWarrantys`, { headers });
  }

  deleteActivation(serial: string): Observable<any> {
    return this.http.delete(`${this.serverUrl}/activation/${serial}`);
  }
}
