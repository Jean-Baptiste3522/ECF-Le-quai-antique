import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalerieComponent } from 'src/app/Components/galerie/galerie.component';



@NgModule({
  declarations: [GalerieComponent],
  imports: [
    CommonModule
  ],
  exports: [GalerieComponent]
})
export class GalerieModule { }
