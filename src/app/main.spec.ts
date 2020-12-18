import { AuthService } from './main';
import { helloWorld } from './main';

describe('Hello world', () => {
  let expected = '';

  beforeEach(() => {
    expected = 'Hello world!';
  });

  afterEach(() => {
    expected = '';
  });

  it('says hello', () => {
    expect(helloWorld()).toEqual(expected);
  });
});

describe('Service: Auth', () => {
  let service: AuthService | null;

  beforeEach(() => {
    service = new AuthService();
  });

  afterEach(() => {
    service = null;
    localStorage.removeItem('token');
  });

  it('should return true from isAuthenticated when there is a token', () => {
    localStorage.setItem('token', '1234');
    expect(service?.isAuthenticated()).toBeTruthy();
  });

  it('should return false from isAuthenticated when there is no token', () => {
    expect(service?.isAuthenticated()).toBeFalsy();
  });
});
