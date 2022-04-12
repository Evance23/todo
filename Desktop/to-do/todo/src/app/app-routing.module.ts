import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { SigninComponent } from './components/signin/signin.component';
// import { RegisterComponent } from './components/register/register.component';
// import { LoginComponent } from './login/login.component';
// import { NavComponent } from './nav/nav.component';
// import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'signin' },
  // { path: 'signin', component: SigninComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'login', component: LoginComponent},
  // { path: 'nav', component: NavComponent},
  // { path: 'task', component: TaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
