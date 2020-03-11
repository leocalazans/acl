import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatingTournamentComponent } from './tournaments/creating-tournament/creating-tournament.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { PartnerComponent } from './partner.component'; 



const routes: Routes = [
  
  { path: '',    component: PartnerComponent, },
  { path: 'creating',    component: CreatingTournamentComponent, },
  { path: 'tournamets',    component: TournamentsComponent, },
  // { path: 'PartnerComponent',    component: TournamentsComponent, },


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
