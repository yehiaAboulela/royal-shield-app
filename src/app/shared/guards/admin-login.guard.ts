import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminLoginGuard: CanActivateFn = (route, state) => {
  const token = sessionStorage.getItem('authToken');
  const routes = inject(Router);
  if (token) {
    return true;
  } else {
    routes.navigate(['/admin/login']);
    return false;
  }
};
