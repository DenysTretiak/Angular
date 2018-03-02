import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class GuardService implements CanActivateChild {

constructor(private userService: UserService) {};

  canActivateChild() {
    console.log("AlwaysAuthChildrenGuard");
    return true;
  }

}
