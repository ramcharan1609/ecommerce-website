import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class SignupComponent {

  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  message = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  signup(): void {

    if (
      !this.name ||
      !this.email ||
      !this.password ||
      !this.confirmPassword
    ) {
      this.message = 'Please fill all fields';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.message = 'Passwords do not match';
      return;
    }

    const success = this.authService.signup(
      this.name,
      this.email,
      this.password
    );

    if (success) {
      alert('Account created successfully!');
      this.router.navigate(['/login']);
    } else {
      this.message = 'An account with this email already exists';
    }
  }
}