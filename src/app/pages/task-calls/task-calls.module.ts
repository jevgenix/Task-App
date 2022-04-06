import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskCallsPageRoutingModule } from './task-calls-routing.module';

import { TaskCallsPage } from './task-calls.page';
import { TaskCallCardComponent } from 'src/app/components/task-call-card/task-call-card.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TaskCallsPageRoutingModule],
  declarations: [TaskCallsPage, TaskCallCardComponent],
})
export class TaskCallsPageModule {}
