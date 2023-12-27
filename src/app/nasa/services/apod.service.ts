import { Injectable } from '@angular/core';
import { Apod } from '../interfaces/APOD.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class APODService {

  public apodArticle!: Apod;

  private apiKey: string = '6InkGgRuZLMmCTgwsbHn5VN4EIDqeGpX3XlQBdUK'
  private serviceUrl: string = 'https://api.nasa.gov/planetary/apod';


  constructor(private http: HttpClient) { }

  getArticle(): void {
    const params = new HttpParams()
    .set('api_key', this.apiKey);

    this.http.get<Apod>(this.serviceUrl, {params})
    .subscribe( resp => {
      this.apodArticle = resp;
    })
  }

}
