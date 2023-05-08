import { Injectable } from '@angular/core';
import { Horaire } from '../Models/horaire';

@Injectable({
  providedIn: 'root'
})
export class HoraireService {
  private horaires: Horaire[] = [
    { jour: 'Lundi', heureOuverture: '10:00', heureFermeture: '22:00' },
    { jour: 'Mardi', heureOuverture: '10:00', heureFermeture: '22:00' },
    { jour: 'Mercredi', heureOuverture: '10:00', heureFermeture: '22:00' },
    { jour: 'Jeudi', heureOuverture: '10:00', heureFermeture: '22:00' },
    { jour: 'Vendredi', heureOuverture: '10:00', heureFermeture: '23:00' },
    { jour: 'Samedi', heureOuverture: '12:00', heureFermeture: '23:00' },
    { jour: 'Dimanche', heureOuverture: '12:00', heureFermeture: '22:00' },
  ];

  constructor() {}



  getHoraires(): Horaire[] {
    return this.horaires;
  }

  setHoraire(jour: string, heureOuverture: string, heureFermeture: string): void {
    const index = this.horaires.findIndex(horaire => horaire.jour === jour);
    if (index !== -1) {
      this.horaires[index].heureOuverture = heureOuverture;
      this.horaires[index].heureFermeture = heureFermeture;
    }
  }
}
