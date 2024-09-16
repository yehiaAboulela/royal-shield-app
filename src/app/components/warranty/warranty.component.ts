import { SerialService } from './../../shared/services/serials.service';
import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as intlTelInput from 'intl-tel-input';
import { ToastrService } from 'ngx-toastr';
import { ConfettiService } from '../../shared/services/confetti.service';
import { tr } from 'intl-tel-input/i18n';

@Component({
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrl: './warranty.component.css',
})
export class WarrantyComponent implements OnDestroy, OnInit {
  constructor(
    private FormBuilder: FormBuilder,
    private SerialService: SerialService,
    private toaster: ToastrService,
    private confettiService: ConfettiService,
    private el: ElementRef
  ) {}

  phoneInputInstance: any;
  validationErrorMessages: { [key: number]: string } = {
    0: '', // No error
    1: 'Invalid phone number',
    2: 'Too short phone number',
    3: 'too long phone number',
    4: 'Invalid phone number',
    5: 'Invalid phone number',
  };

  ngOnInit(): void {
    const phoneInput = this.el.nativeElement.querySelector('#phone');
    if (phoneInput) {
      this.phoneInputInstance = intlTelInput.default(phoneInput, {
        initialCountry: 'us',
        utilsScript:
          'https://cdn.jsdelivr.net/npm/intl-tel-input@24.5.0/build/js/utils.js',
      });
    }
  }
  ownedByTab: boolean = false;
  ownedBy: any = {};
  success: boolean = false;

  warrantyForm: FormGroup = this.FormBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    phoneNumber: ['', [Validators.required]],
    birthdate: ['', [Validators.required]],
    address: ['', [Validators.required]],
    brand: ['', [Validators.required]],
    model: ['', [Validators.required]],
    color: ['', [Validators.required]],
    email: ['', [Validators.required]],
    serialNumber: [
      '',
      [Validators.required, Validators.pattern('^[A-Za-z]{3}-[A-Za-z0-9]{6}$')],
    ],
  });

  activateWarranty(): void {
    const validationMessage = this.getPhoneValidationMessage();
    if (this.warrantyForm.valid && !validationMessage) {
      this.SerialService.warrantyActivation(this.warrantyForm.value).subscribe({
        next: (res) => {
          if (res.msg == 'activated') {
            this.ownedByTab = true;
            this.ownedBy = res.owner;
          } else if (res.msg == 'success') {
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
      this.toaster.warning('Please fill all fields correctly.');
      if (
        validationMessage &&
        this.el.nativeElement.querySelector('#phone').value.length > 0
      ) {
        this.toaster.warning(validationMessage);
      }
    }
  }
  getPhoneValidationMessage(): string {
    if (this.phoneInputInstance) {
      const errorCode = this.phoneInputInstance.getValidationError();
      return this.validationErrorMessages[errorCode];
    }
    return '';
  }

  ngOnDestroy(): void {
    this.success = false;
  }
}
