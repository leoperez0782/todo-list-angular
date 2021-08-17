import {
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormArray, FormBuilder, NgForm } from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  NavigationStart,
  Event as NavigationEvent,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TODOS } from 'src/app/mock-todos';
import { ComponentCanDeactivate } from 'src/app/todos/services/prevent-pending-changes.guard';
import { TodoService } from 'src/app/todos/services/todo.service';
import { StatusEnum } from 'src/app/todos/types/status.enum';
import { TodoInterface } from 'src/app/todos/types/todos.interface';
import { areTodosEquals } from 'src/app/todos/utils/todo.utils';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit, ComponentCanDeactivate {
  @Input() todo!: TodoInterface;
  @Input() isEditing!: boolean;
  @ViewChild('todoForm') public form!: NgForm;
  //Para cuando el usuario realiza cambios y no los quiere guardar.
  private backupTodo!: TodoInterface;
  //isEdited!: boolean;
  getComponentForm!: NgForm;
  resetValue!: TodoInterface;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {}

  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    if (this.todo) {
      const areEquals = areTodosEquals(this.todo, this.backupTodo);

      return this.form.submitted || areEquals;
    }
    return true;
  }

  ngOnInit(): void {
    this.getTodo();
    //Para darle tiempo a que cree los componentes.
    setTimeout(() => {
      this.getComponentForm = this.form;
      this.resetValue = this.backupTodo;
    });
  }

  getTodo(): void {
    const value = this.route.snapshot.paramMap.get('id');
    if (value) {
      const id = parseInt(value);
      //this.todo = TODOS.find((t) => t.id === id)!;
      const todo = this.todoService.findTodo(id); //revisar que pasa si mando id erroneo
      console.log(todo);
      if (todo) {
        this.todo = todo;
        this.isEditing = true;
        this.backupTodo = { ...this.todo };
      } else {
        this.router.navigate(['/list']);
      }
    } else {
      this.todo = {
        id: TODOS.length,
        description: '',
        expireDate: null,
        status: StatusEnum.pending,
      };
      this.backupTodo = { ...this.todo };
      this.isEditing = false;
    }
  }

  onStatusChange(e: Event): void {
    if (e) {
      const target = e.target as HTMLInputElement;
      this.todo.status = target.checked
        ? StatusEnum.completed
        : StatusEnum.pending;
    }
  }

  // onDatePickerChage(e: Event): void {
  //   if (e) {
  //     const target = e.target as HTMLInputElement;
  //     this.todo.expireDate = new Date(target.value);

  //   }
  // }

  undoChanges(e: Event): void {
    this.form.reset(this.backupTodo);
  }

  onSubmit(todoForm: NgForm): void {
    if (this.isEditing) {
      this.todo = { id: this.todo.id, ...todoForm.value };
    } else {
      this.todoService.addTodo({ ...todoForm.value });

    }

    this.router.navigate(['/list']);
  }
}
