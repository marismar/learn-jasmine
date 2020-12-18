export function helloWorld(): string {
  return 'Hello world!';
}

export class AuthService {
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
