import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { ApplicatniosService } from '../../shared/services/applicatnios.service';
import { Application } from '../../shared/interfaces/application';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.css',
  standalone: false,
})
export class ApplicationsComponent implements OnInit, AfterViewInit {
  constructor(private appServ: ApplicatniosService) {}
  applicants: Application[] = [];

  displayedColumns: string[] = [
    'name',
    'birthdate',
    'email',
    'phone',
    'address',
    'position',
    'coverLetter',
  ];
  dataSource = new MatTableDataSource<Application>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.appServ.getApplications().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource.data = res.data.applications;
      },
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
