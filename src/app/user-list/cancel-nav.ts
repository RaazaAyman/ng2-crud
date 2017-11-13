import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserListComponent } from './user-list.component'
@Injectable()
export class CancelNavToUser implements CanDeactivate<UserListComponent> {
 
  canDeactivate(
    component: UserListComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): boolean {
  	return !!component.canNavigate;
  }
}