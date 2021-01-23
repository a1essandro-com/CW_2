import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { Authentication2Guard } from './guards/authentication2.guard';
import { SaveDataGuard } from './guards/save-data.guard';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent, canActivate: [AuthenticationGuard], canDeactivate: [SaveDataGuard] },
  { path: "admin", component: AdminComponent, canActivate: [Authentication2Guard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
