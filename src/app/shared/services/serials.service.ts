import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SerialService {
  constructor(private http: HttpClient) {}

  serverUrl: string = 'https://royal-shield.up.railway.app';
  // serverUrl: string = 'http://localhost:3000';

  getSerials(): Observable<any> {
    return this.http.get(`${this.serverUrl}/viewSerials`);
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
    return this.http.get(`${this.serverUrl}/activatedWarrantys`);
  }

  deleteActivation(serial: string): Observable<any> {
    return this.http.delete(`${this.serverUrl}/activation/${serial}`);
  }
}
