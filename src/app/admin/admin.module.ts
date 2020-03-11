import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';

import { AdminRoutingModule } from './admin-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule} from '@angular/material/input';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { PartnerComponent } from './partner/partner.component';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './profile/profile.component';
import { WordRankingComponent } from './shared/word-ranking/word-ranking.component';
import { FavoriteTournamentsComponent } from './shared/favorite-tournaments/favorite-tournaments.component';
import { NextTournamentsComponent } from './shared/next-tournaments/next-tournaments.component';
import { NextMatchComponent } from './shared/next-match/next-match.component';
import { NextTournamentComponent } from './shared/next-tournament/next-tournament.component';
import { TableRankingResultComponent } from './shared/table-ranking-result/table-result.component';
// import { JudgeComponent } from './judge/judge.component';
// import { PlayerComponent } from './player/player.component'; 
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    ProfileComponent,
    WordRankingComponent,
    FavoriteTournamentsComponent,
    NextTournamentsComponent,
    NextMatchComponent,
    NextTournamentComponent,
    TableRankingResultComponent,
    // JudgeComponent,
    // PlayerComponent,
    
  ],
  exports: [
    MatCardModule,
    MatDividerModule,
    AdminComponent,
    NextTournamentsComponent,
    TableRankingResultComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule, 
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
