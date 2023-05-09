import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarteComponent } from 'src/app/Components/carte/carte.component';
import { CarteService } from 'src/app/Services/carte.service';
import { CartePipe } from 'src/app/pipe/carte.pipe';
import { AuthService } from 'src/app/Services/auth.service';



@NgModule({
  declarations: [CarteComponent,CartePipe],
  imports: [
  CommonModule
  ],
  exports: [CarteComponent],
  providers: [CarteService,AuthService],
})
export class CarteModule { }
