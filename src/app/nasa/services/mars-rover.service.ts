import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap, throwError, map } from 'rxjs';
import { Photo, Rovers, Rover } from '../interfaces/rovers.interface';


@Injectable({providedIn: 'root'})
export class MarsRoverPhotosService {

  private apiUrl: string = 'https://api.nasa.gov/mars-photos/api/v1/rovers';

  private apiKey: string = '6InkGgRuZLMmCTgwsbHn5VN4EIDqeGpX3XlQBdUK'


  constructor(private http: HttpClient) {}


  searchPhotosMars(rover: string, date: Date): Observable<Photo[] | undefined> {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    const url = `${ this.apiUrl }/${rover}/photos?earth_date=${year}-${month}-${day}&api_key=${ this.apiKey }`;

    return this.http.get<Rovers>(url).pipe(
      map(photos => {
        switch (rover) {
          case 'curiosity':
          case 'opportunity':
          case 'spirit':
            return photos.photos;
            console.log(rover , photos.photos)
          default:
            return undefined;
        }
      }),
      catchError(error => {
        console.error('Error fetching Mars photos:', error);
        return throwError(error);
      })
    );
  }

}
