import { SerialService } from './../../shared/services/serials.service';
import { Component, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfettiService } from '../../shared/services/confetti.service';

@Component({
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrl: './warranty.component.css',
})
export class WarrantyComponent implements OnDestroy {
  constructor(
    private FormBuilder: FormBuilder,
    private SerialService: SerialService,
    private toaster: ToastrService,
    private confettiService: ConfettiService
  ) {}

  ownedByTab: boolean = false;
  ownedBy: any = {};
  success: boolean = false;

  warrantyForm: FormGroup = this.FormBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    phoneNumber: ['', [Validators.required, Validators.minLength(8)]],
    birthdate: ['', Validators.required],
    address: ['', Validators.required],
    brand: ['', Validators.required],
    model: ['', Validators.required],
    color: ['', Validators.required],
    email: ['', Validators.required],
    serialNumber: ['', Validators.required],
  });

  activateWarranty(): void {
    if (this.warrantyForm.valid) {
      this.SerialService.warrantyActivation(this.warrantyForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.msg == 'activated') {
            this.ownedByTab = true;
            this.ownedBy = res.owner;
          } else if (res.msg == 'success') {
            // this.toaster.success(
            //   'Your warranty has been activated succefully',
            //   `Congratulations mr ${res.activation.name}`
            // );
            // this.router.navigate(['/thank-you']);
            this.success = true;
            this.confettiService.launchConfetti();
          } else if (res.msg == 'not found') {
            this.toaster.warning('Serial Not Found', 'Sorry');
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.toaster.warning('make sure to fill all feilds');
    }
  }

  ngOnDestroy(): void {
    this.success = false;
  }
}
