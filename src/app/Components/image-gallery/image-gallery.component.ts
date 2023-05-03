import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../Services/image.service';


@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
  export class ImageGalleryComponent implements OnInit {
    images: any[]=[];

    constructor(private imageService: ImageService) { }

    ngOnInit(): void {
      this.getImages();
    }

    getImages(): void {
      this.imageService.getImages()
        .subscribe(images => this.images = images);
    }

    deleteImage(id: number): void {
      this.imageService.deleteImage(id)
        .subscribe(() => {
          this.images = this.images.filter(image => image.id !== id);
        });
    }
  }

