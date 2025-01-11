import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RoyalNanoService } from '../../shared/services/royal-nano.service';
import { Appointment } from '../../shared/interfaces/appointment';
import { TableUtil } from '../../tableUtil';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css',
  standalone: false,
})
export class AppointmentsComponent implements OnInit, AfterViewInit {
  constructor(private rn: RoyalNanoService) {}
  displayedColumns: string[] = [
    'branch',
    'carModel',
    'fullName',
    'notes',
    'phoneNumber',
    'service',
    'action',
  ];
  dataSource = new MatTableDataSource<Appointment>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  appointments: Appointment[] = [];
  ngOnInit(): void {
    this.rn.getAppointmets().subscribe({
      next: (res) => {
        this.appointments = res;
        this.dataSource.data = res;
      },
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  exportData(): void {
    TableUtil.exportTableToExcel('appointmentsTable', 'appointmentsTable');
  }

  deleteAppointmet(id: string) {
    this.rn.deleteAppointment(id).subscribe({
      next: (res) => {
        this.dataSource.data = res.remainingAppointments;
      },
    });
  }
}
