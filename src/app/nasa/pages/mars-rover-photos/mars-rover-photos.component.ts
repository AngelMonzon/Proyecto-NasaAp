import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mars-rover-photos',
  templateUrl: './mars-rover-photos.component.html',
  styleUrl: './mars-rover-photos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarsRoverPhotosComponent { }
