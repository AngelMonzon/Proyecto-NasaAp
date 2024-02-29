// src/app/youtube.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtemisService {
  private apiKey = 'AIzaSyA5hvM0GGoOZTbkYT1--PBC_GY7_M1v5-s'; // Reemplaza con tu propia clave API de YouTube

  constructor(private http: HttpClient) { }

  getPlaylist(playlistId: string): Observable<any> {
    const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${this.apiKey}`;
    return this.http.get(apiUrl);
  }
}
