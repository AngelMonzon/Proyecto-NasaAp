import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Photo, Rovers, Rover } from '../interfaces/rovers.interface';

@Injectable({providedIn: 'root'})
export class MarsRoverPhotosService {

  public photosCuriosity!: Photo[];
  public photosOpportunity!: Photo[];
  public photosSpirit!: Photo[];

  private apiUrl: string = 'https://api.nasa.gov/mars-photos/api/v1/rovers';

  private apiKey: string = '6InkGgRuZLMmCTgwsbHn5VN4EIDqeGpX3XlQBdUK'


  constructor(private http: HttpClient) {}


  searchPhotos(rover: string, date: Date): void{

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    const url = `${ this.apiUrl }/${rover}/photos?earth_date=${year}-${month}-${day}&api_key=${ this.apiKey }`;
    this.http.get<Rovers>(url)
    .subscribe( photos => {switch (rover) {
      case 'curiosity':
        this.photosCuriosity = photos.photos
        break;
      case 'opportunity':
        this.photosOpportunity = photos.photos
        break;
      case 'spirit':
        this.photosSpirit = photos.photos
        break;

      default:
        break;
    }})
    console.log(this.photosCuriosity)
  }

  // searchPhotosOpportunity(): void{

  //   const url = `${ this.apiUrl }/curiosity/photos?earth_date=2009-6-3&api_key=${ this.apiKey }`;
  //   this.http.get<Rovers>(url)
  //   .subscribe( photos => this.photosOpportunity = photos.photos)
  // }

  // searchPhotosSpirit(): void{

  //   const url = `${ this.apiUrl }/spirit/photos?earth_date=2015-6-3&api_key=${ this.apiKey }`;
  //   this.http.get<Rovers>(url)
  //   .subscribe( photos => this.photosSpirit = photos.photos)
  // }

}
