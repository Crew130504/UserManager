import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.scss'],
  standalone:false
})
export class UsersHomeComponent implements OnInit {
  username: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      const parsed = JSON.parse(user);
      this.username = parsed.name || parsed.username;
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/auth']);
  }
}
