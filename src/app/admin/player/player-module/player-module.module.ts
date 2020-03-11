import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerModuleRoutingModule } from './player-module-routing.module';
import { PlayerComponent } from '../player.component'; 
import { AdminModule } from '../../admin.module';


@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    PlayerModuleRoutingModule,
    AdminModule
  ]
})
export class PlayerModuleModule { }
