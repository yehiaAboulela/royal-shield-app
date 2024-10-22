import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ActivatedWarrantysComponent } from './components/activated-warrantys/activated-warrantys.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { ResellersComponent } from './components/resellers/resellers.component';
import { SerialsComponent } from './components/serials/serials.component';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';
import { WarrantyCheckComponent } from './components/warranty-check/warranty-check.component';
import { WarrantyComponent } from './components/warranty/warranty.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AutoCareComponent } from './components/gallery/auto-care/auto-care.component';
import { DippingComponent } from './components/gallery/dipping/dipping.component';
import { GraphineComponent } from './components/gallery/graphine/graphine.component';
import { NanoCeramicComponent } from './components/gallery/nano-ceramic/nano-ceramic.component';
import { PaintProtectionComponent } from './components/gallery/paint-protection/paint-protection.component';
import { WrappingComponent } from './components/gallery/wrapping/wrapping.component';
import { RequestsComponent } from './components/requests/requests.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { adminLoginGuard } from './shared/guards/admin-login.guard';
import { warrantyGuard } from './shared/guards/warranty.guard';
import { InsulationComponent } from './components/gallery/insulation/insulation.component';
import { RoyalNanoComponent } from './components/royal-nano/royal-nano.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'Royal Shield | Home' },
      {
        path: 'about',
        component: AboutComponent,
        title: 'Royal Shield | About',
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
        title: 'Royal Shield | Contact',
      },
      {
        path: 'nano-ceramic',
        component: NanoCeramicComponent,
        title: 'Royal Shield | nano ceramic',
      },
      {
        path: 'graphene',
        component: GraphineComponent,
        title: 'Royal Shield | graphene',
      },
      {
        path: 'auto-care',
        component: AutoCareComponent,
        title: 'Royal Shield | auto care',
      },
      {
        path: 'protection-film',
        component: PaintProtectionComponent,
        title: 'Royal Shield | protection film',
      },
      {
        path: 'dipping',
        component: DippingComponent,
        title: 'Royal Shield | dipping',
      },
      {
        path: 'wrapping',
        component: WrappingComponent,
        title: 'Royal Shield | wrapping',
      },
      {
        path: 'resellers',
        component: ResellersComponent,
        title: 'Royal Shield | Resellers',
      },
      {
        path: 'insulation',
        component: InsulationComponent,
        title: 'Royal Shield | insulation',
      },
    ],
  },
  {
    path: 'admin',
    component: AdminLoginComponent,
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'serials', pathMatch: 'full' },
      {
        path: 'serials',
        component: SerialsComponent,
        canActivate: [adminLoginGuard],
      },
      {
        path: 'requests',
        component: RequestsComponent,
        canActivate: [adminLoginGuard],
      },
      {
        path: 'activated-warrantys',
        component: ActivatedWarrantysComponent,
        canActivate: [adminLoginGuard],
      },
      {
        path: 'royal-nano',
        component: RoyalNanoComponent,
        canActivate: [adminLoginGuard],
      },
    ],
  },
  { path: 'warranty', component: WarrantyCheckComponent },
  {
    path: 'activation',
    component: WarrantyComponent,
    canActivate: [warrantyGuard],
  },
  { path: 'thank-you', component: ThankYouComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
