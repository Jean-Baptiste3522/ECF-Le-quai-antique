import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from 'src/app/Components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports: [SignUpComponent]
})
export class SignupModule { }
