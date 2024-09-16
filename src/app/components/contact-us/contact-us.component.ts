import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OffersService } from './../../shared/services/offers.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  constructor(
    private OffersService: OffersService,
    private fb: FormBuilder,
    private toaster: ToastrService
  ) {}

  loading: boolean = false;

  requestForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    msg: ['', Validators.required],
  });

  sendRequest(): void {
    if (this.requestForm.valid) {
      this.requestForm.reset();
      this.loading = true;
      this.OffersService.sendRequest(this.requestForm.value).subscribe({
        next: (res) => {
          this.toaster.success(
            "We've recieved your message succefully, W'll be in touch soon",
            'Thanks for Reaching Out'
          );
          this.loading = false;
        },
      });

      this.OffersService.sendEmail(this.requestForm.value).subscribe({
        next: (res) => {
          console.log(res);
        },
      });
    } else {
      this.toaster.error('Please Fill All Feilds');
      this.loading = false;
    }
  }
}
