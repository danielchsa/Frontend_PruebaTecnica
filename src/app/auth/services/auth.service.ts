import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _auth: User | undefined;

  constructor(private http: HttpClient) {}

  get getAuth() {
    return { ...this._auth! };
  }

  authenticate(user: User): Observable<User> {
    return this.http
      .post<User>('https://localhost:7075/api/Auth/authenticate', user)
      .pipe(tap((resp) => (this._auth = resp)));
  }

  register(user: User): Observable<any> {
    return this.http.post<any>('https://localhost:7075/api/Auth', user);
  }

  userList(): Observable<User[]> {
    return this.http.get<User[]>('https://localhost:7075/api/Auth');
  }

  logout() {
    this._auth = undefined;
  }
}
