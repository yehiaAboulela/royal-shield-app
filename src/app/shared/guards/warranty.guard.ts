import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const warrantyGuard: CanActivateFn = (route, state) => {
  const token = sessionStorage.getItem('serialToken');
  const routes = inject(Router);
  if (token) {
    return true;
  } else {
    routes.navigate(['/home']);
    return false;
  }
};
