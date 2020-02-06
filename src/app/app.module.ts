import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
>>>>>>> dbca634423990aa5610ac950f2ac14d5a0640d4f

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
=======
    DashboardComponent,
>>>>>>> dbca634423990aa5610ac950f2ac14d5a0640d4f
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
