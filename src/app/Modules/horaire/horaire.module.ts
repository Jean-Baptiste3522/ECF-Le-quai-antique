import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoraireComponent } from 'src/app/Components/horaire/horaire.component';
import { HoraireService } from 'src/app/Services/horaire.service';



@NgModule({
  declarations: [HoraireComponent],
  imports: [
    CommonModule
  ],
  providers: [HoraireService],
  exports: [HoraireComponent]
})
export class HoraireModule { }
