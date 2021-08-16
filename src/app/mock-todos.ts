import { StatusEnum } from "./todos/types/status.enum";
import { TodoInterface } from "./todos/types/todos.interface";

export const TODOS: TodoInterface[] =[
  { id: 2, description:'Aprender angular', expireDate: null, status: StatusEnum.pending},
  { id: 6, description:'Aprender node', expireDate: null, status: StatusEnum.pending},
  { id: 3, description:'Aprender python', expireDate: null, status: StatusEnum.pending},
  { id: 1, description:'Aprender portugues', expireDate: null, status: StatusEnum.pending},
  { id: 5, description:'Comprar comida perro', expireDate: null, status: StatusEnum.pending},
  { id: 4, description:'Cambiar mutualista', expireDate: new Date(), status: StatusEnum.pending},
];
