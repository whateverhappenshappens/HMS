import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { MaterialModule } from './material.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RegisterUserService } from './services/register-user.service';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginUserService } from './services/login-user.service';
import { RouterModule } from '@angular/router';
import { BookingModule } from './module/booking/booking.module';
import { DoctorService } from './services/doctor.service';
import { NewBookingService } from './services/new-booking.service';
import { SharedModule } from './shared/shared.module';
import { BookingService } from './services/booking.service';
import { AccountService } from './services/account.service';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    RegisterComponent,
    DoctorComponent,
    AdminComponent,
    UserComponent,
    LoginComponent
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([]),
    RouterModule,
    FormsModule,
    SharedModule,
    BookingModule

  ],
  providers: [RegisterUserService,AuthService,LoginUserService,DoctorService,NewBookingService,BookingService,AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
