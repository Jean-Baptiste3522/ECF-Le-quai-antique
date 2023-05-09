import { Component, OnInit } from '@angular/core';
import { CarteService } from 'src/app/Services/carte.service';
import { Carte } from 'src/app/Models/carte';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  cartes: Carte[] = [];
  isAdmin = false;

  constructor(private carteService: CarteService,private authService: AuthService) { }

  ngOnInit(): void {
    this.cartes = this.carteService.getListe();
  }

  canEdit(): boolean {
    return this.authService.isAdmin();
  }

  updateCarte(id: number, nom: string, prix: number): void {
    if (this.authService.isAuthenticated()) {
      this.carteService.updateCarte(id, { nom, prix });
    }
  }


  deleteCarte(id: number): void {
    if (this.authService.isAuthenticated()) {
      this.carteService.deleteCarte(id);
      this.cartes = this.carteService.getListe();
    }
  }


}
