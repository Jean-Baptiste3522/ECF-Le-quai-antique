import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './Modules/header/header.module';
import { SignupModule } from './Modules/signup/signup.module';
import { GalerieModule } from './Modules/galerie/galerie.module';
import { ReservationModule } from './Modules/reservation/reservation.module';
import { HomeModule } from './Modules/home/home.module';
import { CarteModule } from './Modules/carte/carte.module';
import { LoginModule } from './Modules/login/login.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpClientModule,ReactiveFormsModule,LoginModule,HeaderModule,SignupModule,GalerieModule,ReservationModule,HomeModule,CarteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
