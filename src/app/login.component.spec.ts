import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';

/* class MockedAuthService extends AuthService {
  authenticated = false;

  isAuthenticated(): boolean {
    return this.authenticated;
  }
} */

describe('Component: Login', () => {
  let component: LoginComponent | any;
  let service: AuthService | any;
  let spy: any;

  beforeEach(() => {
    service = new AuthService();
    component = new LoginComponent(service);
  });

  afterEach(() => {
    service = null;
    component = null;
  });

  it('needsLogin returns true when the user is not authenticated', () => {
    // service.authenticated = false;
    spy = spyOn(service, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });

  it('needsLogin returns false when the user is authenticated', () => {
    // service.authenticated = true;
    localStorage.setItem('token', '1234');
    spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });
});
