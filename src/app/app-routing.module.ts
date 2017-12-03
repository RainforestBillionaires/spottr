import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { SignUpComponent} from './components/sign-up/sign-up.component';
import { HomeComponent} from './components/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginScreenComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '', component: HomeComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }

