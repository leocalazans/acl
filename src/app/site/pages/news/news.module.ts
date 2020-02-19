import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';
import { BannerNewsComponent } from './banner-news/banner-news.component';
import { BannerPagesModule } from './../../shared/banner-pages/banner-pages.module';



@NgModule({
  declarations: [
    NewsComponent,
    BannerNewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    BannerPagesModule
    // PartnershipComponent
  ]
})
export class NewsModule { }
