import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {UserRecoveryComponent} from './pages/user-recovery/user-recovery.component';
import {RecordListComponent} from './pages/record-list/record-list.component';
import {HomeComponent} from './pages/home/home.component';
import {QrCodeComponent} from './pages/qr-code/qr-code.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user-recovery', component: UserRecoveryComponent},
  {path: 'record-list', component: RecordListComponent},
  {path: 'qr-code', component: QrCodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
