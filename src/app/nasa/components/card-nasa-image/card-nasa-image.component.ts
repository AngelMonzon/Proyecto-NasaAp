import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Datum, Item, ItemLink } from '../../interfaces/nasaImage.interface';

@Component({
  selector: 'nasa-card-image',
  templateUrl: './card-nasa-image.component.html',
  styleUrl: './card-nasa-image.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardNasaImageComponent {
  @Input()
  public data!: Datum[];

  @Input()
  public link!: ItemLink[];
}
