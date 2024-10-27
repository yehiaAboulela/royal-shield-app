import { Component } from '@angular/core';
import { SerialService } from '../../shared/services/serials.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-warranty-check',
  templateUrl: './warranty-check.component.html',
  styleUrl: './warranty-check.component.css',
})
export class WarrantyCheckComponent {
  constructor(
    private SerialService: SerialService,
    private FormBuilder: FormBuilder,
    private toaster: ToastrService
  ) {}
  moreThanThree: boolean = false;
  numOfChecksTab: boolean = false;
  numOfChecks: number = 0;
  ownedByTab: boolean = false;
  ownedBy: any = {};
  loading: boolean = false;

  serialForm: FormGroup = this.FormBuilder.group({
    serialNumber: [
      '',
      [Validators.required, Validators.pattern('^[A-Za-z]{3}-[A-Za-z0-9]{6}$')],
    ],
  });
  checkSerial(): void {
    if (this.serialForm.valid) {
      this.loading = true;
      this.SerialService.serialCheck(this.serialForm.value).subscribe({
        next: (res) => {
          if (
            res.status == 'ok' &&
            res.serialNum.numOfChecks >= 0 &&
            !res.activated
          ) {
            sessionStorage.setItem('serialToken', res.token);
            this.numOfChecks = res.serialNum.numOfChecks;
            this.numOfChecksTab = true;
            this.moreThanThree = false;
            this.loading = false;
          } else if (res.status == 'act') {
            this.ownedByTab = true;
            this.ownedBy = res.owner;
            this.loading = false;
          } else {
            this.moreThanThree = true;
            this.numOfChecksTab = false;
            this.loading = false;
          }
        },
        error: (err) => {
          this.toaster.error('Serial not found');
          this.loading = false;
        },
      });
    } else {
      this.serialForm.markAllAsTouched();
    }
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
  };
}
