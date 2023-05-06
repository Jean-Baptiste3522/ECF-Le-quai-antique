import { Pipe, PipeTransform } from '@angular/core';
import { Carte } from '../Models/carte';

@Pipe({
  name: 'carteFilter'
})
export class CartePipe implements PipeTransform {

  transform(cartes: Carte[], selectedCategorie: string): Carte[] {
    if (!selectedCategorie || selectedCategorie === 'Toutes les catégories') {
      return cartes;
    }
    return cartes.filter(carte => carte.categorie === selectedCategorie);
  }

}
