import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('form') userForm!: NgForm;
  error: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}
  onSubmit() {
    this.error = false;
    const username = this.userForm.form.value.user.trim();
    const password = this.userForm.form.value.password.trim();

    if (!username || !password) {
      return;
    }
    const user: User = {
      user: username,
      password,
    };

    this.authService.authenticate(user).subscribe({
      next: (res) => this.router.navigate(['/home']),
      error: () => (this.error = true),
    });
  }
}
