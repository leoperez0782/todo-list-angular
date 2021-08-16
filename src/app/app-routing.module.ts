import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoFormComponent } from './todos/components/todos/todo-form/todo-form.component';
import { TodoListComponent } from './todos/components/todos/todo-list/todo-list.component';

import { PreventPendingChangesGuard } from './todos/services/prevent-pending-changes.guard';

const routes: Routes = [
  {path: '', redirectTo:'list', pathMatch: 'full'},
  {path:'list', component: TodoListComponent},
  {path: 'todo/:id', component: TodoFormComponent, canDeactivate:[PreventPendingChangesGuard]},
  {path: 'todo', component: TodoFormComponent, canDeactivate:[PreventPendingChangesGuard]},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
