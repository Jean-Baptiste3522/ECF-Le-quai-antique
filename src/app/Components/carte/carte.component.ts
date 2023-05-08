import { Component, OnInit } from '@angular/core';
import { CarteService } from 'src/app/Services/carte.service';
import { Carte } from 'src/app/Models/carte';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  cartes: Carte[] = [];
  isAdmin = false;

  constructor(private carteService: CarteService) { }

  ngOnInit(): void {
    this.cartes = this.carteService.getListe();
  }

  canEdit(): boolean {
    return this.isAdmin === true;
  }

  updateCarte(id: number, nom: string, prix: number): void {
    this.carteService.updateCarte(id, { nom, prix });
  }

  deleteCarte(id: number): void {
    this.carteService.deleteCarte(id);
    this.cartes = this.carteService.getListe();
  }

}
