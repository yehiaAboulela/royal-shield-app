import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgParticlesModule } from 'ng-particles';

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
import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { WarrantyCheckComponent } from './components/warranty-check/warranty-check.component';
import { ActivationComponent } from './components/activation/activation.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { RequestsComponent } from './components/requests/requests.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ActivatedWarrantysComponent } from './components/activated-warrantys/activated-warrantys.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { ConfettiComponent } from './components/confetti/confetti.component';
import { NanoCeramicComponent } from './components/gallery/nano-ceramic/nano-ceramic.component';
import { GraphineComponent } from './components/gallery/graphine/graphine.component';
import { ActivatedSearchPipe } from './shared/pipes/activated-search.pipe';

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
    SerialsComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ToastrModule.forRoot(), // ToastrModule added
    FloatLabelModule,
    CalendarModule,
    // NgxMaterialIntlTelInputComponet
  ],
  providers: [provideHttpClient()],

  bootstrap: [AppComponent],
})
export class AppModule {}
