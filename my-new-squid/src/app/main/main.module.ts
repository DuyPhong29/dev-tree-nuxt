import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';
import { MAIN_ROUTES } from './main.routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [provideRouter(MAIN_ROUTES)]
})
export class MainModule { }
