import {Injectable} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../';
import {UsersService} from '../../users/users.service';

export const USER_REGISTER = 'users/REGISTERED';
export const USER_LOGGED_IN = 'users/LOGGED_IN';
export const USER_LOGOUT = 'users/LOGOUT';
export const USER_PROFILE = 'users/PROFILE';

@Injectable()
export class UsersActions {
  constructor(private usersService: UsersService,
              private ngRedux: NgRedux<IAppState>) {
  }

  register(user) {
    this.usersService
      .register(user)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: USER_REGISTER,
          result
        })
      })
  }

  login(user) {
    this.usersService
      .login(user)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: USER_LOGGED_IN,
          result
        })
      })
  }

  logout() {
    this.ngRedux.dispatch({
      type: USER_LOGOUT
    })
  }
}
