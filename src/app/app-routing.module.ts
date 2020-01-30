import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeContentComponent } from './site/pages/home-content/home-content.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ComingSoonComponent } from './site/pages/coming-soon/coming-soon.component';


const routes: Routes = [
  { 
    path: '',  
    pathMatch: 'full',  
    component: HomeContentComponent,
  },
  
  { 
    path: 'dashboard', 
    component: DashboardComponent,  
    outlet: 'adm' 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
