import { Component, OnInit } from '@angular/core';
import { Horaire } from 'src/app/Models/horaire';
import { HoraireService } from 'src/app/Services/horaire.service';

@Component({
  selector: 'app-horaire',
  templateUrl: './horaire.component.html',
  styleUrls: ['./horaire.component.css']
})
export class HoraireComponent implements OnInit {
  horaires: Horaire[] = [];
  isAdmin = false;
  jour: string;
  heureOuverture: string;
  heureFermeture: string;

  constructor(private horaireService: HoraireService) {
    this.jour = '';
    this.heureOuverture = '';
    this.heureFermeture = '';
  }

  ngOnInit(): void {
    this.horaires = this.horaireService.getHoraires();

    this.isAdmin = true;
  }

  setHoraire(jour: string, heureOuverture: string, heureFermeture: string): void {
    this.horaireService.setHoraire(jour, heureOuverture, heureFermeture);
  }

}
