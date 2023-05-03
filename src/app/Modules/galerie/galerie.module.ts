import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from 'src/app/Components/image-gallery/image-gallery.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ImageGalleryComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [ImageGalleryComponent]
})
export class GalerieModule { }
