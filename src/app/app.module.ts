import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';    
import { UsersModule } from './users/users.module'; 

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    AuthModule,
    UsersModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
