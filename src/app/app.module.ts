import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todos/components/todos/todo-list/todo-list.component';
import { TodoItemComponent } from './todos/components/todos/todo-item/todo-item.component';
import { TodoComponent } from './todos/components/todos/todo/todo.component';
import { TodoFormComponent } from './todos/components/todos/todo-form/todo-form.component';
import { PreventPendingChangesGuard } from './todos/services/prevent-pending-changes.guard';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoComponent,
    TodoFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true,
    }),
  ],
  providers: [ PreventPendingChangesGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
