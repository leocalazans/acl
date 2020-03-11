import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

// import { PartnerComponent } from './partner/partner.component'; 
import { ProfileComponent } from './profile/profile.component'; 
// import { PlayerModuleModule } from './player/player-module/player-module.module'


const routes: Routes = [
  
  { path: '',    component: DashboardComponent, },

  { 
    path: 'partner',    
    loadChildren: ()=> import('./partner/partner-admin.module').then(c => c.PartnerAdminModule)
  },
  { 
    path: 'player',    
    loadChildren: ()=> import('./player/player-module/player-module.module').then(c => c.PlayerModuleModule)
  },
  { 
    path: 'judge',    
    loadChildren: ()=> import('./judge/judge-module/judge-module.module').then(c => c.JudgeModuleModule)
  },

  { path: 'profile',    component: ProfileComponent, },
  // { path: 'user',    component: UserRegisterComponent, },
  // { path: 'player',    component: PlayersRegisterComponent, },
  // { path: 'partnership',    component: PartnershipComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {
}
