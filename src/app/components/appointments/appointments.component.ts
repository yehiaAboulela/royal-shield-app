import { Component, OnInit } from '@angular/core';
import { RoyalNanoService } from '../../shared/services/royal-nano.service';
import { Appointment } from '../../shared/interfaces/appointment';
import { TableUtil } from '../../tableUtil';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css',
})
export class AppointmentsComponent {
  constructor(private rn: RoyalNanoService) {}

  appointments: Appointment[] = [];
  ngOnInit(): void {
    this.rn.getAppointmets().subscribe({
      next: (res) => {
        this.appointments = res;
        console.log(res);
      },
    });
  }

  exportData(): void {
    TableUtil.exportTableToExcel('appointmentsTable', 'appointmentsTable');
  }

  deleteAppointmet(id: string) {
    this.rn.deleteAppointment(id).subscribe({
      next: (res) => {
        this.appointments = res.remainingAppointments;
      },
    });
  }
}
