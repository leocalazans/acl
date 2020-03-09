import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { CreatingTournamentComponent } from './tournaments/creating-tournament/creating-tournament.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule} from '@angular/material/input';

import {MatDatepickerModule} from '@angular/material/datepicker'; 
@NgModule({
  declarations: [
    DashboardComponent,
    TournamentsComponent,
    CreatingTournamentComponent,
  ],
  exports: [
    MatCardModule,
    MatDividerModule
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
        FormsModule, 
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
