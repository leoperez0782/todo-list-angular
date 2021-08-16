import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/app/todos/services/todo.service';
import { StatusEnum } from 'src/app/todos/types/status.enum';
import { TodoInterface } from 'src/app/todos/types/todos.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: TodoInterface;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onStatusChange(e :Event): void{

    if(e){
      const target = e.target as HTMLInputElement;
      this.todo.status = target.checked ? StatusEnum.completed : StatusEnum.pending;
    }

  }

  onDatePickerChage(e : Event): void{
    if(e){
      const target = e.target as HTMLInputElement;
      this.todo.expireDate =new Date(target.value);
      console.log(this.todo.expireDate);
    }
  }

  onDelete(todo: TodoInterface):void{
    //hacerlo desde un servicio.
    console.log("Entra a la funcion");
    const deleteConfirm = confirm('Esta a punto de eliminar la tarea, desea continuar?');
    if(deleteConfirm){
      console.log("Aca lo borro");
      this.todoService.deleteTodo(todo);
    }else{
      console.log("Aca no lo borro");
    }
  }

}
