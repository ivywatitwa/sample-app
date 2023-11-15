import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'sidebar', component:SidebarComponent, canActivate: [AuthGuard]},
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
