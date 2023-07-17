import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from '../app.actions';
import { AppState } from '../app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private store: Store<AppState>) {}

  onUsernameChange(newValue: string) {
    console.log('Nuevo valor de usuario:', newValue);
  }
  login() {
    if (this.username === 'test01' && this.password === 'test01') {
      this.store.dispatch(login({ username: this.username, password: this.password }));
      this.router.navigate(['/tasks']);
    } else {
      console.log("err")
    }
  }
}
