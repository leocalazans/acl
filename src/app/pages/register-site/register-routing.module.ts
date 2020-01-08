import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRegisterComponent } from './users/user/user.component';
import { PlayersRegisterComponent } from './players/players/players.component';
import { RegisterSiteComponent } from './register-site.component';

const routes: Routes = [
  
  { path: 'register',    component: RegisterSiteComponent, },
  { path: 'register/user',    component: UserRegisterComponent, },
  { path: 'register/player',    component: PlayersRegisterComponent, },

    // { path: 'register/player',    
  //   loadChildren: ()=> import('./register-site/players/players/players.component').then(c => c.PlayersRegisterComponent)
  // },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }




