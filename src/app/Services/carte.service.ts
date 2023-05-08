import { Injectable } from '@angular/core';
import { Carte } from '../Models/carte';

@Injectable({
  providedIn: 'root'
})
export class CarteService {
  isAdmin = true;
  cartes: Carte[] = [
    { id: 1, nom: 'Salade de tomates et mozzarella', prix: 12, categorie: 'entrée' },
    { id: 2, nom: 'Soupe à l\'oignon', prix: 12, categorie:'entrée' },
    { id: 3, nom: 'Foie gras et sa confiture de figues', prix: 12, categorie:'entrée' },
    { id: 4, nom: 'Magret de canard, sauce au miel', prix: 20, categorie: 'plat' },
    { id: 5, nom: 'Tartare de boeuf, frites maison', prix: 20,categorie: 'plat' },
    { id: 6, nom: 'Risotto aux champignons', prix: 20, categorie: 'plat' },
    { id: 7, nom: 'Tiramisu', prix: 12, categorie: 'dessert' },
    { id: 8, nom: 'Crème brûlée', prix: 12, categorie: 'dessert' },
    { id: 9, nom: 'Tarte Tatin', prix: 12, categorie: 'dessert' },
  ];

  constructor() { }

  getCarte(id: number): Carte | undefined {
    return this.cartes.find(carte => carte.id === id);
  }

  updateCarte(id: number, data: any): void {
    const index = this.cartes.findIndex(carte => carte.id === id);
    if (index !== -1) {
      this.cartes[index] = { ...this.cartes[index], ...data };
    }
  }

  deleteCarte(id: number): void {
    const index = this.cartes.findIndex(carte => carte.id === id);
    if (index !== -1) {
      this.cartes.splice(index, 1);
    }
  }

  getListe(): Carte[] {
    return this.cartes;
  }

  canEdit(): boolean {
    return this.isAdmin;
  }
}
