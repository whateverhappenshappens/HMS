import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { BookingRoutingModule } from './booking-routing.module';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AddBookingComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ]
})
export class BookingModule { }
