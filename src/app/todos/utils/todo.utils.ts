import { TodoInterface } from "../types/todos.interface";


export function areTodosEquals(obj1: TodoInterface, obj2: TodoInterface): boolean {
  if(obj1.description !== obj2.description)return false;
  if(obj1.expireDate?.toString() !== obj2.expireDate?.toString)return false;
  if(obj1.id !== obj2.id) return false;
  if(obj1.status !== obj2.status)return false;
  return true;
}
