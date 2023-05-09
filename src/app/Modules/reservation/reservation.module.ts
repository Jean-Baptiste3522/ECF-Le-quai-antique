import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from 'src/app/Components/reservation/reservation.component';
import { HoraireService } from 'src/app/Services/horaire.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ReservationComponent],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports: [ReservationComponent],
  providers: [HoraireService]
})
export class ReservationModule { }
