import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {MainPageComponent} from '../main-page/main-page.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'main-page',
    component: MainPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
