import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarteComponent } from 'src/app/Components/carte/carte.component';
import { CarteListeComponent } from 'src/app/Components/carte-liste/carte-liste.component';
import { CarteService } from 'src/app/Services/carte.service';
import { CartePipe } from 'src/app/pipe/carte.pipe';



@NgModule({
  declarations: [CarteComponent,CarteListeComponent,CartePipe],
  imports: [
  CommonModule
  ],
  exports: [CarteComponent,CarteListeComponent],
  providers: [CarteService],
})
export class CarteModule { }
