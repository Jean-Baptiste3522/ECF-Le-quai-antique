import { Component, OnInit } from '@angular/core';
import { Carte } from 'src/app/Models/carte';
import { CarteService } from 'src/app/Services/carte.service';

@Component({
  selector: 'app-carte-list',
  templateUrl: './carte-liste.component.html',
  styleUrls: ['./carte-liste.component.css']
})
export class CarteListeComponent implements OnInit {
  cartes: Carte[] = [];
  categories: string[] = [];
  isAdmin = false;
  selectedCategory: string = '';

  constructor(private carteService: CarteService) { }

  ngOnInit(): void {
    this.getCarte(1);
    this.isAdmin = true; // Mettre ici la logique pour vérifier si l'utilisateur est un admin ou non
  }

  getCarte(id:number): void {
    this.carteService.getCarte(id).subscribe(cartes => {
      this.cartes.push(cartes);
      this.categories = Array.from(new Set(this.cartes.map(carte => carte.categorie)));
    });
  }

  deleteCarte(id: number): void {
    this.carteService.deleteCarte(id).subscribe(() => this.getCarte(1));
  }
  updateCarte(carte: Carte): void {
    const data = {
      titre: carte.titre,
      description: carte.description,
      prix: carte.prix,
      categorie: carte.categorie
    };
    this.carteService.updateCarte(carte.id, data).subscribe(() => this.getCarte(1));
  }
}
