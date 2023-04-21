import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarteComponent } from 'src/app/Components/carte/carte.component';



@NgModule({
  declarations: [CarteComponent],
  imports: [
    CommonModule
  ],
  exports: [CarteComponent]
})
export class CarteModule { }
