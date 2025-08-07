import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter, RouterModule } from '@angular/router';
import { AUTH_ROUTES } from './auth.routes';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    AuthComponent,
    LoginComponent
  ],
  providers: [provideRouter(AUTH_ROUTES)]
})
export class AuthModule { }
