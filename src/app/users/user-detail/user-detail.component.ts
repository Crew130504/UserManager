import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  standalone:false
})
export class UserDetailComponent implements OnInit {
  user!: User;
  isLoading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.userService.getUserById(id).subscribe({
      next: (data) => {
        this.user = data;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'No se pudo cargar el usuario.';
        this.isLoading = false;
      }
    });
  }
  goBack(): void {
    this.router.navigate(['/users']);
  }

}
