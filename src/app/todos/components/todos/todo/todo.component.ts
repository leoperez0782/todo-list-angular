import { Component, OnInit, Input, Output } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TODOS } from 'src/app/mock-todos';
import { StatusEnum } from 'src/app/todos/types/status.enum';
import { TodoInterface } from 'src/app/todos/types/todos.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
/**
 * tengo que agregar un valor booleano para saber si es nuevo o estoy editando
 */
  @Input() todo!: TodoInterface;
  @Input()  isEditing! : boolean;
  //Para cuando el usuario realiza cambios y no los quiere guardar.
  private backupTodo!: TodoInterface;
  todoForm!: FormGroup;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getTodo();
    this.todoForm = this.formBuilder.group({
      description:[(this.todo.description) ? this.todo.description : ''],
      expireDate:[''],
      status:[(this.todo.status) ? this.todo.status : StatusEnum.pending]
    })

  }
  getTodo(): void {
    const value = this.route.snapshot.paramMap.get('id');
    if(value){
      const id = parseInt(value);
      this.todo = TODOS.find( t => t.id === id)!;
      this.isEditing =true;
      this.backupTodo = {...this.todo};
    }else{
      this.todo = {
        id: TODOS.length,
        description:'',
        expireDate: null,
        status: StatusEnum.pending
      };
      this.isEditing = false;
    }
  }

  onStatusChange(e :Event): void{

    if(e){
      const target = e.target as HTMLInputElement;
      this.todo.status = target.checked ? StatusEnum.completed : StatusEnum.pending;
      const stat = this.todo.status;
      this.todoForm.patchValue({status:stat})
    }

  }

  onDatePickerChage(e : Event): void{
    if(e){
      const target = e.target as HTMLInputElement;
      this.todo.expireDate =new Date(target.value);
      console.log(this.todo.expireDate);
    }
  }

  onSave( todo: TodoInterface): void{
    if(this.isEditing){
      console.log(todo.id);
      this.location.go('/list');
    }else{
      //guardar
    }
    console.log("entra onSave");
    this.router.navigate(['/list']);
  }

  onSubmit():void{
    console.log(this.todoForm.value);
    this.todo = {id: this.todo.id, ...this.todoForm.value};
  }
}
