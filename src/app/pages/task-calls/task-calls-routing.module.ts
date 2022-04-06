import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskCallCardComponent } from 'src/app/components/task-call-card/task-call-card.component';

import { TaskCallsPage } from './task-calls.page';

const routes: Routes = [
  {
    path: '',
    component: TaskCallsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskCallsPageRoutingModule {}
