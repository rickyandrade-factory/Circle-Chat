import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminusersComponent } from './adminusers/adminusers.component';

import { ErrorComponent } from './error/error.component';
import { AdminpaymentsComponent } from './adminpayments/adminpayments.component';
import { AdminsubscriptionsComponent } from './adminsubscriptions/adminsubscriptions.component';
// import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'admindashboard', component: AdmindashboardComponent},
  { path: 'adminusers', component: AdminusersComponent},
  { path: 'adminpayments', component: AdminpaymentsComponent},
  { path: 'adminsubscriptions', component: AdminsubscriptionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
