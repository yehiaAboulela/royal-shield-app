import { ActivatedWarrantysComponent } from './components/activated-warrantys/activated-warrantys.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { VideosComponent } from './components/videos/videos.component';
import { ResellersComponent } from './components/resellers/resellers.component';
import { WarrantyComponent } from './components/warranty/warranty.component';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { SerialsComponent } from './components/serials/serials.component';
import { WarrantyCheckComponent } from './components/warranty-check/warranty-check.component';
// import { ActivationComponent } from './components/activation/activation.component';
import { warrantyGuard } from './shared/guards/warranty.guard';
import { RequestsComponent } from './components/requests/requests.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { adminLoginGuard } from './shared/guards/admin-login.guard';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { NanoCeramicComponent } from './components/gallery/nano-ceramic/nano-ceramic.component';
import { GraphineComponent } from './components/gallery/graphine/graphine.component';

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
        path: 'products',
        component: GalleryComponent,
        title: 'Royal Shield | Products',
      },
      {
        path: 'nano-ceramic',
        component: NanoCeramicComponent,
        title: 'Royal Shield | nano-ceramic',
      },
      {
        path: 'graphine',
        component: GraphineComponent,
        title: 'Royal Shield | graphine',
      },
      // { path: 'videos', component: VideosComponent, title: 'Royal Shield | Contact' },
      {
        path: 'resellers',
        component: ResellersComponent,
        title: 'Royal Shield | Resellers',
      },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: AdminLoginComponent },
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
    ],
  },
  { path: 'warranty', component: WarrantyCheckComponent },
  {
    path: 'activation',
    component: WarrantyComponent,
    canActivate: [warrantyGuard],
  },
  { path: 'thank-you', component: ThankYouComponent },
  // { path: 'activation', component: ActivationComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
