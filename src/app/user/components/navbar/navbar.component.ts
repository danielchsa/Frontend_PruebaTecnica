import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  user: User;

  constructor(private router: Router, private authService: AuthService) {
    this.user = this.authService.getAuth;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
