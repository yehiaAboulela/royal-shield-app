import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AdminLoginService } from '../services/admin-login.service';

@Injectable({
  providedIn: 'root',
})
export class adminLoginGuard implements CanActivate {
  constructor(
    private AdminLoginService: AdminLoginService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isLoggedIn = this.AdminLoginService.isAdminLoggedIn();
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
