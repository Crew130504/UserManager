import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { LayoutComponent } from '../core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: UsersHomeComponent },
      { path: ':id', component: UserDetailComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
