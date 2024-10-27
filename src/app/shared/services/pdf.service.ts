import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  private apiUrl = 'http://localhost:3000/activation'; // Adjust the URL as necessary

  constructor(private http: HttpClient) {}

  downloadPdf(data: any): void {
    this.http.post(this.apiUrl, data, { responseType: 'blob' }).subscribe(
      (response: Blob) => {
        // Trigger file download
        const file = new Blob([response], { type: 'application/pdf' });
        saveAs(file, 'user-details.pdf');
      },
      (error) => {
        console.error('Error downloading PDF', error);
      }
    );
  }
}
