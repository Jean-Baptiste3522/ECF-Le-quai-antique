import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusComponent } from 'src/app/Components/menus/menus.component';
import { MenuService } from 'src/app/Services/menu.service';


@NgModule({
  declarations: [MenusComponent],
  imports: [
    CommonModule
  ],
  providers: [MenuService],
  exports: [MenusComponent]
})
export class MenusModule { }
