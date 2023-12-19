import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-exoplanet',
  templateUrl: './exoplanet.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExoplanetComponent { }
