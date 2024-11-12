import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JudgeModuleRoutingModule } from './judge-module-routing.module';
import { JudgeComponent } from '../judge.component';
import { AdminModule } from '../../admin.module';


@NgModule({
  declarations: [
    JudgeComponent,
  ],
  imports: [
    CommonModule,
    JudgeModuleRoutingModule,
    AdminModule
  ]
})
export class JudgeModuleModule { }
