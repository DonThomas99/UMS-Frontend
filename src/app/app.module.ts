import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './pages/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RegisterComponent } from './pages/register/register.component';
import { AdminCreateuserComponent } from './pages/admin-createuser/admin-createuser.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminNavComponent } from './pages/admin-nav/admin-nav.component';
import { AdminUsereditComponent } from './pages/admin-useredit/admin-useredit.component';
import { AdminUserlistComponent } from './pages/admin-userlist/admin-userlist.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { postReducer, profileReducer } from './pages/state/app.reducer';
import { appEffects } from './pages/state/app.effects';
import { AppService } from './pages/state/app.service';
import { AdminRoutingModule } from './pages/admin-login/admin.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginPageComponent,
    HomeComponent,
    ProfileComponent,
    RegisterComponent,
    AdminCreateuserComponent,
    AdminLoginComponent,
    AdminNavComponent,
    AdminUsereditComponent,
    AdminUserlistComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({userdetails:profileReducer,allusers:postReducer}, {}),
    EffectsModule.forRoot([appEffects])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
