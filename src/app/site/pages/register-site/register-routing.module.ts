import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRegisterComponent } from './users/user/user.component';
import { PlayersRegisterComponent } from './players/players/players.component';
import { RegisterSiteComponent } from './register-site.component';
import { PartnershipComponent } from './partnership/partnership/partnership.component';

const routes: Routes = [
  
  { path: '',    component: RegisterSiteComponent, },
  { path: 'user',    component: UserRegisterComponent, },
  { path: 'player',    component: PlayersRegisterComponent, },
  { path: 'partnership',    component: PartnershipComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }




