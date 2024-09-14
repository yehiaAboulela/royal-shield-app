import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SerialService {
  constructor(private http: HttpClient) {}

  getSerials(): Observable<any> {
    return this.http.get('https://royal-shield.up.railway.app/viewSerials');
  }
  addSerial(serial: any): Observable<any> {
    return this.http.post(
      'https://royal-shield.up.railway.app/addSerial',
      serial
    );
  }
  deleteSerial(serial: string): Observable<any> {
    return this.http.post('https://royal-shield.up.railway.app/deleteSerial', {
      serialNumber: serial,
    });
  }

  serialCheck(serial: any): Observable<any> {
    return this.http.post(
      'https://royal-shield.up.railway.app/checkSerial',
      serial
    );
  }

  warrantyActivation(warrantyForm: any): Observable<any> {
    return this.http.post(
      'https://royal-shield.up.railway.app/activation',
      warrantyForm
    );
  }

  getActivatedWarrantys(): Observable<any> {
    return this.http.get(
      'https://royal-shield.up.railway.app/activatedWarrantys'
    );
  }

  deleteActivation(serial: string): Observable<any> {
    return this.http.delete(
      `https://royal-shield.up.railway.app/activation/${serial}`
    );
  }
}
