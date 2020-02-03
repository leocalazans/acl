import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginSiteComponent } from './login-site/login-site.component';
// import { RegisterSiteComponent } from './register-site/register-site.component';
import { RankingComponent } from './ranking/ranking.component';
import { HomeContentComponent } from './home-content/home-content.component';
// register
import { RegisterModule } from './register-site/register.module'

import { TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { HttpClientModule,HttpClient } from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import { MatTabsModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';


import { TableResultComponent } from './ranking/table-result/table-result.component';
import { BannerHomeComponent } from './home-content/banner-home/banner-home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PartnershipModule } from './partnership/partnership.module';
// import { BannerPagesComponent } from './../shared/banner-pages/banner-pages.component';

export const createTranslateLoader = (http:HttpClient) =>{
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}; 
import { BannerPagesModule } from './../shared/banner-pages/banner-pages.module';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewsComponent } from './news/news.component';
import { SingleNewsComponent } from './news/single-news/single-news.component';
import { BannerNewsComponent } from './news/banner-news/banner-news.component';

@NgModule({
  declarations: [
    LoginSiteComponent,
    // RegisterSiteComponent,
    RankingComponent,
    HomeContentComponent,
    BannerHomeComponent,
    TableResultComponent,
    AboutUsComponent,
    ComingSoonComponent,
    NotFoundComponent,
    NewsComponent,
    SingleNewsComponent,
    BannerNewsComponent,
    // BannerPagesComponent
  ],
  // exports:[BannerPagesComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    FormsModule, 
    ReactiveFormsModule,
    PagesRoutingModule,
    RegisterModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    MatPaginatorModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps:[HttpClient]
      }

    }),
    PartnershipModule,
    BannerPagesModule
  ]
})
export class PagesModule { }
