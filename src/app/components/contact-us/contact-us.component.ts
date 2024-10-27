import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OffersService } from './../../shared/services/offers.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Offer } from '../../shared/interfaces/offer';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent implements OnInit {
  constructor(
    private OffersService: OffersService,
    private fb: FormBuilder,
    private toaster: ToastrService,
    private route: ActivatedRoute
  ) {}

  company: string = '';
  ngOnInit(): void {
    this.route.fragment.subscribe({
      next: (res) => {
        if (res) {
          this.company = res as string;
        } else {
          this.company = '-';
        }
      },
    });
  }
  loading: boolean = false;

  requestForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    msg: ['', Validators.required],
  });

  finalForm(): Offer {
    let reqForm = this.requestForm.value;
    reqForm.company = this.company;
    return reqForm;
  }
  sendRequest(): void {
    if (this.requestForm.valid) {
      this.loading = true;

      this.OffersService.sendRequest(this.finalForm()).subscribe({
        next: (res) => {
          this.requestForm.reset();
          this.toaster.success(
            "We've recieved your message succefully, W'll be in touch soon",
            'Thanks for Reaching Out'
          );
          this.loading = false;
        },
      });

      this.OffersService.sendEmail(this.finalForm()).subscribe({
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
