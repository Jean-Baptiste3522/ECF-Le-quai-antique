import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Carte } from '../Models/carte';

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  private apiURL = 'http://localhost:3307';

  constructor(private http: HttpClient) { }
  getCarte(id: number): Observable<Carte> {
    const token = localStorage.getItem('currentUser');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Carte>(`${this.apiURL}/cartes/${id}`, { headers }).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(error);
        })
      );
  }
  updateCarte(id: number, data: any): Observable<any> {
    const token = localStorage.getItem('currentUser');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.apiURL}/cartes/${id}`, data, { headers })
      .pipe(
        catchError((error) => {
          console.error(error);
          return [];
        })
      );
  }
  deleteCarte(id: number): Observable<any> {
    const token = localStorage.getItem('currentUser');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.apiURL}/cartes/${id}`, { headers })
      .pipe(
        catchError((error) => {
          console.error(error);
          return [];
        })
      );
  }

}
