import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (user) {
      this.loggedIn = true;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }

    return false;
  }

  signup(name: string, email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const existingUser = users.find(
      (u: any) => u.email === email
    );

    if (existingUser) {
      return false;
    }

    const newUser = {
      name,
      email,
      password
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    return true;
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  getCurrentUser(): any {
    return JSON.parse(
      localStorage.getItem('currentUser') || 'null'
    );
  }
}