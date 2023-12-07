import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-apod',
  templateUrl: './APOD.component.html',
  styleUrl: './APOD.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class APODComponent { }
