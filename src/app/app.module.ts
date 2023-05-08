import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './Modules/header/header.module';
import { SignupModule } from './Modules/signup/signup.module';
import { GalerieModule } from './Modules/galerie/galerie.module';
import { ReservationModule } from './Modules/reservation/reservation.module';
import { HomeModule } from './Modules/home/home.module';
import { CarteModule } from './Modules/carte/carte.module';
import { LoginModule } from './Modules/login/login.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { MenusModule } from './Modules/menus/menus.module';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,CommonModule,AppRoutingModule,HttpClientModule,ReactiveFormsModule,LoginModule,GalerieModule,HeaderModule,SignupModule,ReservationModule,HomeModule,CarteModule,MenusModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
