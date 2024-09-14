import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLoginService } from '../../shared/services/admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
})
export class AdminLoginComponent {
  loginForm: FormGroup;
  // errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private AdminLoginService: AdminLoginService,
    private router: Router,
    private toaster: ToastrService
  ) {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Login method
  login() {
    if (this.loginForm.invalid) {
      this.toaster.error('Enter valid inouts');
      return;
    }

    const { name, password } = this.loginForm.value;

    this.AdminLoginService.login(name, password).subscribe({
      next: (response) => {
        console.log(response);
        const token = response.token;
        this.AdminLoginService.setToken(token); // Store the token in localStorage
        this.router.navigate(['/admin/serials']); // Redirect to dashboard on success
      },
      error: (err) => {
        this.toaster.error('Unauthorized User');
      },
    });
  }
}
