import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { EpicMD } from '../interfaces/epic';

@Injectable({
  providedIn: 'root'
})
export class EpicService {

  private apiUrl: string = "https://api.nasa.gov/EPIC/api/natural/date/";

  private apiKey: string = '6InkGgRuZLMmCTgwsbHn5VN4EIDqeGpX3XlQBdUK';


  constructor(private http: HttpClient) { }

  getMediaEpic(date: Date): Observable<EpicMD[]>{
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const url = `${ this.apiUrl }${year}-${month}-${day}?api_key=${ this.apiKey }`;


    return this.http.get<EpicMD[]>(url).pipe(
      map(items => {return items}),
      catchError(error => {
        console.error('Error fetching Nasa photos:', error);
        return throwError(error);
      })
      );
  }

}
