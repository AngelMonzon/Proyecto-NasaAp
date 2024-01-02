import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NasaImage } from '../../interfaces/nasaImage.interface';
import { nasaImageService } from '../../services/nasaImage.service';

@Component({
  selector: 'app-nasa-image-video',
  templateUrl: './nasa-image-video.component.html',
  styleUrl: './nasa-image-video.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NasaImageVideoComponent {

  public nasaMediaArray!: NasaImage[];

  constructor(private nasaImageService: nasaImageService){}

  searchMedia(){
    this.nasaImageService.searchMediaNasa('pluton')
    .subscribe(media => this.nasaMediaArray = media);

    console.log(this.nasaMediaArray)
  }
}
