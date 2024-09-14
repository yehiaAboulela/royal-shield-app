import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  constructor(private http: HttpClient) {}

  getAllOffers(): Observable<any> {
    return this.http.get('https://royal-shield.up.railway.app/getOffers');
  }
  checkOffer(id: string): Observable<any> {
    return this.http.post('https://royal-shield.up.railway.app/offerCheck', {
      Id: id,
    });
  }
  uncheckOffer(id: string): Observable<any> {
    return this.http.post('https://royal-shield.up.railway.app/offerUnCheck', {
      Id: id,
    });
  }
  deleteOffers(): Observable<any> {
    return this.http.delete('https://royal-shield.up.railway.app/deleteOffers');
  }

  sendRequest(requestBody: any): Observable<any> {
    return this.http.post(
      'https://royal-shield.up.railway.app/sendOffer',
      requestBody
    );
  }

  sendEmail(requestBody: any): Observable<any> {
    return this.http.post(
      'https://royal-shield.up.railway.app/send-email',
      requestBody
    );
  }
}
