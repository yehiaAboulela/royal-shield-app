import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { VideosComponent } from './components/videos/videos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TestimonialsComponent } from './components/home/testimonials/testimonials.component';
import { ResellersComponent } from './components/resellers/resellers.component';
import { WarrantyComponent } from './components/warranty/warranty.component';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { SerialsComponent } from './components/serials/serials.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { WarrantyCheckComponent } from './components/warranty-check/warranty-check.component';
import { ActivationComponent } from './components/activation/activation.component';
import { RequestsComponent } from './components/requests/requests.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ActivatedWarrantysComponent } from './components/activated-warrantys/activated-warrantys.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { ConfettiComponent } from './components/confetti/confetti.component';
import { NanoCeramicComponent } from './components/gallery/nano-ceramic/nano-ceramic.component';
import { GraphineComponent } from './components/gallery/graphine/graphine.component';
import { ActivatedSearchPipe } from './shared/pipes/activated-search.pipe';
import { PaintProtectionComponent } from './components/gallery/paint-protection/paint-protection.component';
import { AutoCareComponent } from './components/gallery/auto-care/auto-care.component';
import { DippingComponent } from './components/gallery/dipping/dipping.component';
import { WrappingComponent } from './components/gallery/wrapping/wrapping.component';
import { InsulationComponent } from './components/gallery/insulation/insulation.component';
import { RoyalNanoComponent } from './components/royal-nano/royal-nano.component';
import { ResellerPipe } from './shared/pipes/reseller.pipe';
import { ApplicationsComponent } from './components/applications/applications.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// angular mat
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    GalleryComponent,
    VideosComponent,
    NavbarComponent,
    FooterComponent,
    TestimonialsComponent,
    ResellersComponent,
    WarrantyComponent,
    UserLayoutComponent,
    AdminLayoutComponent,
    AdminNavComponent,
    WarrantyCheckComponent,
    ActivationComponent,
    RequestsComponent,
    AdminLoginComponent,
    ActivatedWarrantysComponent,
    ThankYouComponent,
    ConfettiComponent,
    NanoCeramicComponent,
    GraphineComponent,
    ActivatedSearchPipe,
    PaintProtectionComponent,
    AutoCareComponent,
    DippingComponent,
    WrappingComponent,
    InsulationComponent,
    RoyalNanoComponent,
    ResellerPipe,
    ApplicationsComponent,
    AppointmentsComponent,
    BlogsComponent,
    SerialsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ToastrModule.forRoot(), // ToastrModule added
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],

  bootstrap: [AppComponent],
})
export class AppModule {}
