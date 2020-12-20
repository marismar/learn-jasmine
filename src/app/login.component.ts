import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: '<a [hidden]="needsLogin()"></a>',
})
export class LoginComponent {
  constructor(private auth: AuthService) {}

  needsLogin(): boolean {
    return !this.auth.isAuthenticated();
  }
}
