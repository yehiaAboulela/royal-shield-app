import { SerialService } from './../../shared/services/serials.service';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as intlTelInput from 'intl-tel-input';
import { ToastrService } from 'ngx-toastr';
import { ConfettiService } from '../../shared/services/confetti.service';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { HttpClient } from '@angular/common/http';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
    private el: ElementRef,
    private http: HttpClient
  ) {}

  phoneInputInstance: any;
  ownedByTab: boolean = false;
  ownedBy: any = {};
  success: boolean = false;
  activation: any = {};
  base64Image: string | ArrayBuffer | null = null;
  warrantyPoints: string[] = [
    'Exclusions for Damage: The warranty does not extend to damages resulting from misuse, improper washing, deliberate damage, or accidents.',
    'Environmental Factors: Damages caused by weather conditions or exposure to extreme temperatures are not covered under this warranty.',
    'Application of Polish: The application of any polish to the vehicle after the installation of protective layers will immediately void the warranty.',
    'Previously Painted Surfaces: The warranty excludes any vehicle parts that have been previously repainted.',
    'Maintenance Instructions: To ensure the longevity of the protective layers, the customer must adhere to the provided care instructions. Failure to do so may impact warranty coverage.',
    'Periodic Maintenance: Regular maintenance is required every three months throughout the warranty period. Non-compliance with these maintenance intervals will void the warranty.',
    'Use of Caustic Materials and Chemicals: The use of caustic substances or chemical cleaning products can deteriorate the protective layer, affecting its durability and voiding the warranty.',
    'Bird Droppings: Damages caused by bird droppings are not covered by this warranty.',
    'Car Covers: The use of padded car covers is strongly discouraged as they may affect the integrity of the protective layer.',
    'High-Pressure Washing: Avoid using high-pressure water guns on the edges of the protective film to prevent damage.',
    'Exclusion for Bird Droppings: Any damage caused by bird droppings is excluded from the warranty coverage.',
  ];
  myFile: any = '';
  loading: boolean = false;

  validationErrorMessages: { [key: number]: string } = {
    0: '', // No error
    1: 'Invalid phone number',
    2: 'Too short phone number',
    3: 'too long phone number',
    4: 'Invalid phone number',
    5: 'Invalid phone number',
  };
  warrantyForm: FormGroup = this.FormBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    phoneNumber: ['', [Validators.required]],
    birthdate: ['', [Validators.required]],
    address: ['', [Validators.required, Validators.minLength(7)]],
    brand: ['', [Validators.required]],
    model: ['', [Validators.required, Validators.minLength(4)]],
    color: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    serialNumber: [
      '',
      [Validators.required, Validators.pattern('^[A-Za-z]{3}-[A-Za-z0-9]{6}$')],
    ],
    image: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.loadImage();
    this.costumizePhoneInput();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.myFile = file;
  }
  loadImage(): void {
    const imagePath =
      'https://tools.royalshieldworld.com/public/imgs/logo-transparent.png'; // Adjust the path as needed

    this.http.get(imagePath, { responseType: 'arraybuffer' }).subscribe({
      next: (data: ArrayBuffer) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.base64Image = reader.result;
        };
        reader.readAsDataURL(new Blob([data]));
      },
      error: (error) => {
        console.error('Error loading image', error);
      },
    });
  }

  costumizePhoneInput(): void {
    const phoneInput = this.el.nativeElement.querySelector('#phone');
    if (phoneInput) {
      this.phoneInputInstance = intlTelInput.default(phoneInput, {
        initialCountry: 'us',
        utilsScript:
          'https://cdn.jsdelivr.net/npm/intl-tel-input@24.5.0/build/js/utils.js',
      });
    }
  }

  getPhoneValidationMessage(): string {
    if (this.phoneInputInstance) {
      const errorCode = this.phoneInputInstance.getValidationError();
      return this.validationErrorMessages[errorCode];
    }
    return '';
  }

  activateWarranty(): void {
    this.loading = true;
    const validationMessage = this.getPhoneValidationMessage();
    if (this.warrantyForm.valid && !validationMessage) {
      const formData = new FormData();
      Object.keys(this.warrantyForm.controls).forEach((control) => {
        formData.append(control, this.warrantyForm.controls[control].value);
      });
      if (this.myFile) {
        formData.append('image', this.myFile, this.myFile.name);
      }

      this.SerialService.warrantyActivation(formData).subscribe({
        next: (res) => {
          this.loading = false;
          if (res.msg == 'activated') {
            this.ownedByTab = true;
            this.ownedBy = res.owner;
          } else if (res.msg == 'not found') {
            this.toaster.warning('Serial Not Found', 'Sorry');
          } else if (res.msg == 'success') {
            this.success = true;
            this.confettiService.launchConfetti();
            this.activation = res.activation;
            // this.generatePdf();
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.warrantyForm.markAllAsTouched();
    }
  }

  generatePdf(): void {
    const docDefinition = {
      background: [
        {
          image: this.base64Image,
          width: 595.28,
          absolutePosition: { x: 0, y: 150 },
        },
      ],

      footer: {
        columns: [
          {
            text: 'support@royalshieldworld.com',
            margin: [30, 0, 0, 0],
          },
        ],
      },
      content: [
        { text: 'Warranty Details', style: 'header', margin: [0, 0, 0, 20] },
        {
          columns: [
            {
              width: '50%',
              stack: [
                { text: `Name: ${this.activation.name}`, style: 'details' },
                {
                  text: `Phone Number: ${this.activation.phoneNumber}`,
                  style: 'details',
                },
                {
                  text: `Birthdate: ${this.activation.birthdate}`,
                  style: 'details',
                },
                {
                  text: `Address: ${this.activation.address}`,
                  style: 'details',
                },
                {
                  text: `Brand: ${this.activation.brand}`,
                  style: 'details',
                  margin: [0, 5, 0, 20],
                },
              ],
            },
            {
              width: '50%',
              stack: [
                { text: `Color: ${this.activation.color}`, style: 'details' },
                { text: `Email: ${this.activation.email}`, style: 'details' },
                {
                  text: `Serial Number: ${this.activation.serialNumber}`,
                  style: 'details',
                },
                {
                  text: `Created At: ${this.activation.createdAt.slice(0, 10)}`,
                  style: 'details',
                },
                {
                  text: `Model: ${this.activation.model}`,
                  style: 'details',
                  margin: [0, 5, 0, 20],
                },
              ],
            },
          ],
        },
        // Horizontal line
        {
          canvas: [
            {
              type: 'line',
              x1: 0,
              y1: 0,
              x2: 515, // Width of the line
              y2: 0,
              lineWidth: 1,
              lineColor: '#000000', // Line color
              margin: [0, 20, 0, 20], // Margin for spacing
            },
          ],
        },
        // New section for warranty points
        { text: 'Warranty Terms', style: 'header', margin: [0, 20, 0, 10] },
        {
          ul: this.warrantyPoints.map((point) => ({
            text: point,
            style: 'term',
          })),
          style: 'pointsList',
        },
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          alignment: 'left',
          margin: [0, 20, 0, 20],
        },
        details: {
          fontSize: 14,
          margin: [0, 5, 0, 5],
        },
        term: {
          fontSize: 12,
          margin: [0, 5, 0, 5],
        },
        subheader: {
          fontSize: 18,
          margin: [0, 0, 0, 5],
        },
      },
      defaultStyle: {
        columnGap: 10,
      },
    };

    pdfMake
      .createPdf(docDefinition)
      .download(`${this.activation.name}.pdf`, 'this.activation.name');
  }

  ngOnDestroy(): void {
    this.success = false;
  }
}
