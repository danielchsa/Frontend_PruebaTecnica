import { inject, Injectable } from '@angular/core';
import { CanMatchFn } from '@angular/router';

import { AuthService } from '../services/auth.service';
@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private authService: AuthService) {}

  userExists(): boolean {
    const exists = this.authService.getAuth.user ? true : false;

    return exists;
  }
}

export function authGuardCanMatch(): CanMatchFn {
  return () => {
    const auth = inject(AuthGuard);

    return auth.userExists();
  };
}
