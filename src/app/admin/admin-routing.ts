import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        children: [
          {
            path: 'dashboard', 
            component: DashboardComponent, 
            outlet: 'adm'
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AdminModule {
}
