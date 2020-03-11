import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { SingleNewsComponent } from './single-news/single-news.component';

const partnerRoutes: Routes = [
  
    { path: '',    component: NewsComponent, },
    { path: 'nome-noticia',    component: SingleNewsComponent, },
  ]
  
  @NgModule({
    imports: [RouterModule.forChild(partnerRoutes)],
    exports: [RouterModule]
  })
  export class NewsRoutingModule { }