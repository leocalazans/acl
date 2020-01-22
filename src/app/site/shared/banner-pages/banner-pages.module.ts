import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerPagesComponent } from './banner-pages.component';



@NgModule({
  declarations: [BannerPagesComponent],
  imports: [
    CommonModule
  ],
  exports:[BannerPagesComponent]
})
export class BannerPagesModule { }
