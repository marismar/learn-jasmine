import { ComponentFixture, TestBed } from '@angular/core/testing';
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
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService | any;

  beforeEach(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService],
    });

    // create component test fixture
    fixture = TestBed.createComponent(LoginComponent);
    // get test component from the fixture
    component = fixture.componentInstance;
    // AuthService provided to the TestBed
    authService = TestBed.inject(AuthService);
  });

  it('needsLogin returns true when the user is not authenticated', () => {
    // service.authenticated = false;
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  it('needsLogin returns false when the user is authenticated', () => {
    // service.authenticated = true;
    localStorage.setItem('token', '1234');
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });
});
