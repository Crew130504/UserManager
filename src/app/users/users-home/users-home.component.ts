import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../core/models/user.model';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.scss'],
  standalone:false
})
export class UsersHomeComponent implements OnInit {
  username: string = '';
  users: User[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      const parsed = JSON.parse(user);
      this.username = parsed.name || parsed.username;
    }

    this.userService.getUsers().subscribe({
      next: data => {
        this.users = data;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Error al cargar usuarios.';
        this.isLoading = false;
      }
    });
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/auth']);
  }

  viewDetails(id: number): void {
    this.router.navigate(['/users', id]);
  }

}
