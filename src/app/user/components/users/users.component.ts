import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User[] = [];

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.userList().subscribe({
      next: (resp) => {
        this.user = resp;
      },
    });
  }
}
