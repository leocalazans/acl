import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';

const partnerRoutes: Routes = [
  
    { path: '',    component: NewsComponent, },
  ]
  
  @NgModule({
    imports: [RouterModule.forChild(partnerRoutes)],
    exports: [RouterModule]
  })
  export class NewsRoutingModule { }