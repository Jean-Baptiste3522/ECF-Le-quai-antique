import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Image } from '../Models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'http://localhost:3000/api/images';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  createImage(image: Image): Observable<Image> {
    return this.http.post<Image>(this.apiUrl, JSON.stringify(image), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateImage(id: number, image: Image): Observable<Image> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Image>(url, JSON.stringify(image), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteImage(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}
