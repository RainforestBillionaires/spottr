import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginScreenComponent} from './components/login-screen/login-screen.component';
import { HomeComponent} from './components/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginScreenComponent },
  { path: 'signup', component: LoginScreenComponent },
  { path: '', component: HomeComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }

