import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {RegisterUserModel} from './register-user.model';

import {UsersActions} from '../store/users/users.actions';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store/app.state';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  user: RegisterUserModel = new RegisterUserModel();

  constructor(
    private usersActions: UsersActions,
    private ngRedux: NgRedux<IAppState>,
    private router: Router
    ) {}

  register() {
    this.usersActions.register(this.user);

    this.ngRedux
      .select(state => state.users.userRegistered)
      .subscribe(userRegistered => {
        if (userRegistered) {
          this.router.navigateByUrl('users/login');
        }
      })
  }
}
