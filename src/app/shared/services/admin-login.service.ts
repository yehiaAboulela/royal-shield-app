import { Injectable, Signal, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminLoginService {
  private apiUrl = 'https://royal-shield.up.railway.app/admin';
  // private apiUrl = 'http://localhost:3000/admin';

  constructor(private http: HttpClient) {}

  isAdminLoggedIn = signal(true);
  getAdminStatus(): boolean {
    return this.isAdminLoggedIn();
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  setToken(token: string): void {
    sessionStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return sessionStorage.getItem('authToken');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    sessionStorage.removeItem('authToken');
  }

  getDashboardData(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.apiUrl}/viewSerials`, { headers });
  }
}
