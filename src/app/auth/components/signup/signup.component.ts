import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  @ViewChild('form') registerForm!: NgForm;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const username = this.registerForm.form.value.user.trim();
    const password = this.registerForm.form.value.password.trim();

    if (!username || !password) {
      return;
    }

    const user: User = {
      user: username,
      password,
    };

    this.authService.register(user).subscribe({
      next: (res) => {
        if (res.success) {
          this.router.navigate(['login']);
        }
      },
    });
  }
}
