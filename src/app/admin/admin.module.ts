import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [],
  exports: [
    MatCardModule,
    MatDividerModule
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class AdminModule { }
