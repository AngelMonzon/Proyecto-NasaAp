import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NasaImage } from '../interfaces/nasaImage.interface';

@Injectable({providedIn: 'root'})
export class nasaImageService {

  private apiUrl = 'https://images-api.nasa.gov/search';

  constructor(private http: HttpClient) { }

  searchMediaNasa(query: string): Observable<NasaImage[]>{
    return this.http.get<NasaImage[]>(`${this.apiUrl}?q=${query}`);
  }

}
