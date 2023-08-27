import { NgModule } from "@angular/core";
import {MatInputModule} from "@angular/material/input"
import {MatSelectModule} from "@angular/material/select"
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSortModule} from '@angular/material/sort'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatStepperModule} from '@angular/material/stepper'
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
    exports:[
       MatInputModule,
       MatSelectModule,
       MatCardModule,
       MatRadioModule,
       MatCheckboxModule,
       MatSortModule,
       MatPaginatorModule,
       MatStepperModule,
       MatListModule,
       MatSnackBarModule,
       MatTableModule,
       MatDividerModule,
       MatButtonModule,
       MatToolbarModule,
    ]
})

export class MaterialModule{

}
