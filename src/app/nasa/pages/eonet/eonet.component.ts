import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-eonet',
  templateUrl: './eonet.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EonetComponent { }
