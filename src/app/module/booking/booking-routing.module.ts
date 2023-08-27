import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddBookingComponent } from "./add-booking/add-booking.component";

const routes:Routes = [
    { path: 'add-booking', component: AddBookingComponent },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class BookingRoutingModule{}