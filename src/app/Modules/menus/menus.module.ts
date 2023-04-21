import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusComponent } from 'src/app/Components/menus/menus.component';



@NgModule({
  declarations: [MenusComponent],
  imports: [
    CommonModule
  ],
  exports: [MenusComponent]
})
export class MenusModule { }
