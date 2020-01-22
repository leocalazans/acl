import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnershipComponent } from './partnership.component';
import { PartnershipRoutingModule } from './partnership-routing.module';
import { BannerPagesModule } from './../../shared/banner-pages/banner-pages.module';



@NgModule({
  declarations: [
    PartnershipComponent
  ],
  imports: [
    CommonModule,
    PartnershipRoutingModule,
    BannerPagesModule
    // PartnershipComponent
  ]
})
export class PartnershipModule { }
