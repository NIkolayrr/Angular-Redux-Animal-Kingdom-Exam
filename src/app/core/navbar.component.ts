import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store/app.state';

import {AuthService} from './auth.service';

import {UsersActions} from '../store/users/users.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit{
  authenticated: boolean = false;
  username: string = null;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private router: Router,
    private authService: AuthService,
    private userActions: UsersActions
    ) {}

  ngOnInit() {
    this.ngRedux
      .select(state => state.users)
      .subscribe(users => {
        this.authenticated = users.userAuthenticated;
        this.username = users.username;
      })
  }

  logout() {
    this.userActions.logout();
    this.authService.deauthenticateUser();
    this.authService.removeUser();

    this.router.navigateByUrl('');
  }
}
