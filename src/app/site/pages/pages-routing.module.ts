import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankingComponent } from './ranking/ranking.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginSiteComponent } from './login-site/login-site.component';

const routes: Routes = [
  

  { path: 'ranking',    component: RankingComponent, },
  { path: 'login',    component: LoginSiteComponent, },
  { path: 'about',    component: AboutUsComponent, },

  { path: 'register',    
    loadChildren: ()=> import('./register-site/register.module').then(c => c.RegisterModule)
  },
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
