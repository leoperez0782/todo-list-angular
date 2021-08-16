import { Injectable } from '@angular/core';
import { asyncScheduler, Observable, scheduled } from 'rxjs';
import { TODOS } from 'src/app/mock-todos';
import { TodoInterface } from '../types/todos.interface';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: TodoInterface[] = TODOS;
  lastId!: number;
  constructor() {
    this.todoList
    .sort((a, b) => a.id - b.id);
  }

  getTodoList(): Observable<TodoInterface[]>{

    return scheduled([(this.todoList)], asyncScheduler);
  }

  addTodo(todo: TodoInterface):void{
    const value = this.todoList[this.todoList.length -1].id + 1;
    todo.id =value;
    this.todoList.push(todo);
  }

  findTodo(lookupId: number):TodoInterface | undefined{
    return this.todoList.find( t => t.id == lookupId);
  }

  deleteTodo(todo:TodoInterface):void{
    const index =this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
  }
}
