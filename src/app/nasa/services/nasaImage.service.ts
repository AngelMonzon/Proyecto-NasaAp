import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item, NasaImages } from '../interfaces/nasaImage.interface';

@Injectable({providedIn: 'root'})
export class nasaImageService{

  public items!: Item[];

  private apiUrl = 'https://images-api.nasa.gov/search';

  constructor(private http: HttpClient) {
    this.http.get<NasaImages>(`${this.apiUrl}?q=mercury`)
    .subscribe(items =>
      this.items = items.collection.items)
  }



  getMediaNasa(term: string): void{
    this.http.get<NasaImages>(`${this.apiUrl}?q=${term}`)
    .subscribe(items => this.items = items.collection.items);
  }


}
