import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HoraireService } from 'src/app/Services/horaire.service';
import { Horaire } from 'src/app/Models/horaire';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservationForm: FormGroup;
  horaires: Horaire[] = [];
  availableHours: string[] = [];
  maxCouverts = 30;
  reservations: any[] = [];

  constructor(private formBuilder: FormBuilder, private horaireService: HoraireService) {
    this.reservationForm = this.formBuilder.group({
      nbCouverts: [1, [Validators.required, Validators.min(1), Validators.max(this.maxCouverts)]],
      date: ['', Validators.required],
      heure: ['', Validators.required],
      allergies: ['']
  });
   }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      nbCouverts: [1, [Validators.required, Validators.min(1), Validators.max(this.maxCouverts)]],
      date: ['', Validators.required],
      heure: ['', Validators.required],
      allergies: ['']
    });

    this.horaires = this.horaireService.getHoraires();
  }

  onSubmit(): void {
    console.log(this.reservationForm.value);
  }

  onDateChange(): void {
    this.updateAvailableHours();
  }

  updateAvailableHours(): void {
    const selectedDate = new Date(this.reservationForm.value.date);
    const jour = selectedDate.toLocaleString('fr-FR', { weekday: 'long' });
    const horaire = this.horaires.find(h => h.jour === jour);

    if (!horaire) {
      this.availableHours = [];
      return;
    }

    const heureOuverture = parseInt(horaire.heureOuverture.split(':')[0]);
    const heureFermeture = parseInt(horaire.heureFermeture.split(':')[0]);

    let availableHours = [];

    for (let i = heureOuverture; i < heureFermeture; i++) {
      for (let j = 0; j < 60; j += 15) {
        const heure = i.toString().padStart(2, '0');
        const minute = j.toString().padStart(2, '0');
        const time = `${heure}:${minute}`;

        const reservations = this.getReservations(selectedDate, time);

        if (reservations.length < this.maxCouverts) {
          availableHours.push(time);
        }
      }
    }

    this.availableHours = availableHours;
  }

  getReservations(date: Date, time: string): any[] {
    return this.reservations.filter(r => {
      const reservationDate = new Date(r.date);
      const reservationTime = r.time;

      return reservationDate.toDateString() === date.toDateString() && reservationTime === time;
    });
  }

}
