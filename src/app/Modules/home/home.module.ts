import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { HeaderModule } from '../header/header.module';
import { GalerieModule } from '../galerie/galerie.module';
import { ReservationModule } from '../reservation/reservation.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,HeaderModule,GalerieModule,ReservationModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
