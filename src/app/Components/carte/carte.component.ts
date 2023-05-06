import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Carte } from 'src/app/Models/carte';
import { CarteService } from 'src/app/Services/carte.service';
import { AuthService } from 'src/app/Services/auth.service';
import { CartePipe } from 'src/app/pipe/carte.pipe';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css'],

})
export class CarteComponent implements OnInit {
  isAdmin: boolean = false;
  carte?: Carte;
  cartes: Carte[] = [];

  constructor(
    private authService: AuthService,
    private carteService: CarteService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
    this.getCarte();
  }

  getCarte(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carteService.getCarte(id)
      .subscribe(carte => this.carte = carte);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.carte) {
      this.carteService.updateCarte(this.carte.id, this.carte)
        .subscribe(() => this.goBack());
    }
  }
}
