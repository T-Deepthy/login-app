import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , redirectTo:'/login' , pathMatch: 'full'},
   {path:'home',
   loadChildren: () => import('./home/home.module').then(m => m.HomeModule),canActivate: [AuthGuard]} ,
   {path:'login', component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
