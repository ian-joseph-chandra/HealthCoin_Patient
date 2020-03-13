import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {UserRecoveryComponent} from './pages/user-recovery/user-recovery.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RecordListComponent} from './pages/record-list/record-list.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './pages/home/home.component';
import {CookieService} from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    UserRecoveryComponent,
    RecordListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
