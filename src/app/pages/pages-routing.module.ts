import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginSiteComponent } from './login-site/login-site.component';
import { RegisterSiteComponent } from './register-site/register-site.component';
import { RankingComponent } from './ranking/ranking.component';
import { HomeContentComponent } from './home-content/home-content.component';

const routes: Routes = [
  
  { path: '',    component: HomeContentComponent, },
  { path: 'login',    component: LoginSiteComponent, },
  { path: 'register',    component: RegisterSiteComponent, },
  { path: 'ranking',    component: RankingComponent, },

    // { path: 'register/player',    
  //   loadChildren: ()=> import('./register-site/players/players/players.component').then(c => c.PlayersRegisterComponent)
  // },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
