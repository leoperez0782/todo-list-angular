import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoInterface } from '../types/todos.interface';


export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
  getComponentForm: NgForm;
  resetValue: TodoInterface
}

@Injectable({
  providedIn: 'root'
})
export class PreventPendingChangesGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(
    component: ComponentCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(component.canDeactivate()){

      return true;
    }else{
      const leave = confirm("Tiene cambios sin guardar. Presione 'Cancel' para cancelar, o presione 'Aceptar' para salir sin guardar ");
      if(leave){
        component.getComponentForm.reset(component.resetValue);

      }
      return leave;
    }
  }

}
