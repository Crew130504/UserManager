import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://localhost:3000';

login(username: string, password: string): Observable<any | null> {
  return this.http.get<any[]>(`${this.baseUrl}/users`).pipe(
    map(users =>
      users.find(
        user => user.username === username && user.password === password
      ) || null
    )
  );
}



}
