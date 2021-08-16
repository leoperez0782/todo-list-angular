import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todos/services/todo.service';
import { TodoInterface } from 'src/app/todos/types/todos.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {

  todos!: TodoInterface[];
  selectedTodo!: TodoInterface;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodoList();
  }

  onSelect(todo: TodoInterface): void{
    this.selectedTodo = todo;
  }
  getTodoList(): void{
    this.todoService.getTodoList()
    .subscribe(todoList => this.todos = todoList);
  }

}
