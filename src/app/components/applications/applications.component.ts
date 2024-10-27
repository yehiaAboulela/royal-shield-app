import { Component, OnInit } from '@angular/core';
import { ApplicatniosService } from '../../shared/services/applicatnios.service';
import { Application } from '../../shared/interfaces/application';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.css',
})
export class ApplicationsComponent implements OnInit {
  constructor(private appServ: ApplicatniosService) {}
  applicants: Application[] = [];
  ngOnInit(): void {
    this.appServ.getApplications().subscribe({
      next: (res) => {
        this.applicants = res.data.applications;
      },
    });
  }

  downloadCV(applicationId: string, name: string): void {
    this.appServ.downloadCV(applicationId).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${name}.pdf`;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
