import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusComponent } from 'src/app/Components/menus/menus.component';
import { MenuService } from 'src/app/Services/menu.service';
import { AuthService } from 'src/app/Services/auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MenusComponent],
  imports: [
    CommonModule,FormsModule
  ],
  providers: [MenuService,AuthService],
  exports: [MenusComponent]
})
export class MenusModule { }
