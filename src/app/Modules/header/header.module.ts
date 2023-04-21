import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleComponent } from 'src/app/Components/title/title.component';
import { NavbarComponent } from 'src/app/Components/navbar/navbar.component';
import { HeaderComponent } from 'src/app/Components/header/header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';




@NgModule({
  declarations: [TitleComponent,NavbarComponent,HeaderComponent],
  imports: [
    CommonModule,AppRoutingModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
