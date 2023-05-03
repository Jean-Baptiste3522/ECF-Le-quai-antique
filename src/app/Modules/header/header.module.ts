import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleComponent } from 'src/app/Components/title/title.component';
import { NavbarComponent } from 'src/app/Components/navbar/navbar.component';
import { HeaderComponent } from 'src/app/Components/header/header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from 'src/app/Components/signup/signup.component';
import { LoginComponent } from 'src/app/Components/login/login.component';
import { LoginModule } from '../login/login.module';
import { SignupModule } from '../signup/signup.module';



@NgModule({
  declarations: [TitleComponent,NavbarComponent,HeaderComponent],
  imports: [
    CommonModule,AppRoutingModule,ReactiveFormsModule,LoginModule,SignupModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
