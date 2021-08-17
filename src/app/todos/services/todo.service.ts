import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { asyncScheduler, BehaviorSubject, Observable, scheduled } from 'rxjs';
import { TODOS } from 'src/app/mock-todos';
import { TodoInterface } from '../types/todos.interface';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoListUrl = 'http://localhost:8080/todos';
  private _todoList: BehaviorSubject<TodoInterface[]> = new BehaviorSubject<TodoInterface[]>([]);
  todoList: Observable<TodoInterface[]> = this._todoList.asObservable();
  lastId!: number;
  constructor(private http: HttpClient) {

  }

  getTodos(){

  }
  getTodoList(): Observable<TodoInterface[]>{
   this.http.get<TodoInterface[]>(this.todoListUrl).pipe(
     catchError(this.handleError<TodoInterface[]>('getTodoList', []))
   )
   .subscribe(
     res => {
       this._todoList.next(res)
     }
   );

    return this.todoList;
  }

  addTodo(todo: TodoInterface):void{
    const a = this._todoList.getValue();
    const b = a.concat([todo]);
     this._todoList.next( b);

  }

  findTodo(lookupId: number):TodoInterface | undefined{
    // return this.todoList.find( t => t.id == lookupId);
    return undefined;
  }

  deleteTodo(todo:TodoInterface):void{
    // const index =this.todoList.indexOf(todo);
    // this.todoList.splice(index, 1);
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @see https://docs.angular.lat/tutorial/toh-pt6
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // // TODO: better job of transforming error for user consumption
        // this.log(`${operation} failed: ${error.message}`);

        // // Let the app keep running by returning an empty result.
        return scheduled([result as T], asyncScheduler);
      };
    }
}
