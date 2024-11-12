import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

import { RankingComponent } from './ranking/ranking.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginSiteComponent } from './login-site/login-site.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { TournamentsComponent } from './tournaments/tournaments.component';

const routes: Routes = [
  

  { path: 'ranking',    component: RankingComponent, },
  { path: 'login',    component: LoginSiteComponent, },
  { path: 'about',    component: AboutUsComponent, },
  { path: 'tournaments',    component: TournamentsComponent, },

  { path: 'register',    
    loadChildren: ()=> import('./register-site/register.module').then(c => c.RegisterModule)
  },
  { path: 'partnership',    
    loadChildren: ()=> import('./partnership/partnership.module').then(c => c.PartnershipModule)
  },
  { path: 'news',    
    loadChildren: ()=> import('./news/News.module').then(c => c.NewsModule)
  },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
  // {path: 'coming-soon',  component: ComingSoonComponent},
  // {path: '**',  component: NotFoundComponent}
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
