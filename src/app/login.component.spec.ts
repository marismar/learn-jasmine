import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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
  let el: DebugElement;

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
    //  get the "a" element by CSS selector
    el = fixture.debugElement.query(By.css('a'));
  });

  it('login button hidden when the user is authenticated', () => {
    // to being with Angular has not done any change detection so the content is blank
    expect(el.nativeElement.textContent.trim()).toBe('');

    // trigger change detection and this lets the template update to the initial value which is Login since by
    // default we are not authenticated
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');

    // change the authetication state to true
    spyOn(authService, 'isAuthenticated').and.returnValue(true);

    // the label is still Login! We need changeDetection to run and for angular to update the template
    expect(el.nativeElement.textContent.trim()).toBe('Login');

    // which we can trigger via fixture.detectChange()
    fixture.detectChanges();

    // now the label is Logout
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
  });

  /*   it('needsLogin returns true when the user is not authenticated', () => {
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
  }); */
});
