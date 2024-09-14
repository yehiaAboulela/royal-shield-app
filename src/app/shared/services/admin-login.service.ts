import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminLoginService {
  private apiUrl = 'https://royal-shield.up.railway.app/admin'; // Express server URL

  constructor(private http: HttpClient) {}

  // Admin login
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  // Store JWT token in sessionStorage
  setToken(token: string): void {
    sessionStorage.setItem('authToken', token);
  }

  // Retrieve JWT token from sessionStorage
  getToken(): string | null {
    return sessionStorage.getItem('authToken');
  }

  // Check if the admin is authenticated
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // Logout admin and remove token
  logout(): void {
    sessionStorage.removeItem('authToken');
  }

  // Fetch protected dashboard data with JWT token
  getDashboardData(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.apiUrl}/serials`, { headers });
  }
}
