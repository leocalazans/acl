import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PartnershipComponent} from './partnership.component'
const partnerRoutes: Routes = [
  
  { path: '',    component: PartnershipComponent, },
]

@NgModule({
  imports: [RouterModule.forChild(partnerRoutes)],
  exports: [RouterModule]
})
export class PartnershipRoutingModule { }
