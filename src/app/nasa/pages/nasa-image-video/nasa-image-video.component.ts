import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nasa-image-video',
  templateUrl: './nasa-image-video.component.html',
  styleUrl: './nasa-image-video.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NasaImageVideoComponent { }
