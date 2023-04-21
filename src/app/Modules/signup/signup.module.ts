import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from 'src/app/Components/signup/signup.component';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule
  ],
  exports: [SignupComponent]
})
export class SignupModule { }
