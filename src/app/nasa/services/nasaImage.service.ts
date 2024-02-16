import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Item, NasaImages } from '../interfaces/nasaImage.interface';

@Injectable({providedIn: 'root'})
export class nasaImageService{


  private apiUrl = 'https://images-api.nasa.gov/search';

  constructor(private http: HttpClient) {}



  getMediaNasa(term: string): Observable<Item[]>{
    return this.http.get<NasaImages>(`${this.apiUrl}?q=${term}`).pipe(
      map(items => {return items.collection.items}),

      catchError(error => {
        console.error('Error fetching Nasa photos:', error);
        return throwError(error);
      })
      );
  }


}
