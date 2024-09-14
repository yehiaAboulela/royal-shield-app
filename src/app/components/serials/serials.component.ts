import { AdminLoginService } from './../../shared/services/admin-login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Serial } from './../../shared/interfaces/serial';
import { SerialService } from './../../shared/services/serials.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-serials',
  templateUrl: './serials.component.html',
  styleUrl: './serials.component.css',
})
export class SerialsComponent implements OnInit {
  constructor(
    private SerialService: SerialService,
    private FormBuilder: FormBuilder,
    private toastr: ToastrService,
    private AdminLoginService: AdminLoginService
  ) {}

  serials: Serial[] = [];

  ngOnInit(): void {
    this.SerialService.getSerials().subscribe({
      next: (res) => {
        this.serials = res.serials;
      },
    });
  }

  serialForm: FormGroup = this.FormBuilder.group({
    serialNumber: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
    ],
  });

  addSerial(): void {
    if (this.serialForm.valid) {
      this.SerialService.addSerial(this.serialForm.value).subscribe({
        next: (res) => {
          this.serials = res.serials;
          this.toastr.success('Added succefully');
        },
        error: (err) => {
          this.toastr.warning('Serial Alredy exists in database');
        },
      });
    } else {
      this.serialForm.markAllAsTouched();
    }
  }
  deleteSerial(serialNum: string): void {
    this.SerialService.deleteSerial(serialNum).subscribe({
      next: (res) => {
        if (res.msg == 'success') {
          this.serials = res.serial;
        }
      },
    });
  }
}
