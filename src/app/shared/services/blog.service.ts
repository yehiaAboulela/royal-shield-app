import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../interfaces/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://royal-shield.up.railway.app';
  // private apiUrl = 'http://localhost:3000';

  getToken(): string | null {
    return sessionStorage.getItem('authToken');
  }
  getBlogs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/blog`);
  }
  postBlog(blogContent: Blog): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/blog`, blogContent, {
      headers,
    });
  }
}
