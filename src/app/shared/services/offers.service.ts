import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://royal-shield-be-production.up.railway.app';
  // private apiUrl = 'http://localhost:3000';

  getToken(): string | null {
    return sessionStorage.getItem('authToken');
  }
  getAllOffers(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/getOffers`, {
      headers,
    });
  }

  checkOffer(id: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/offerCheck`, {
      Id: id,
    });
  }
  uncheckOffer(id: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/offerUnCheck`, {
      Id: id,
    });
  }
  deleteOffers(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteOffers`);
  }

  sendRequest(requestBody: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/sendOffer`, requestBody);
  }

  sendEmail(requestBody: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-email`, requestBody);
  }
}
