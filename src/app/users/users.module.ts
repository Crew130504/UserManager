import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UserDetailComponent } from './user-detail/user-detail.component'; 

@NgModule({
  declarations: [
    UsersHomeComponent,
    UserDetailComponent 
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule {}
