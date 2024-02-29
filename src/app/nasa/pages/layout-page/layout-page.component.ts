import { ChangeDetectionStrategy, Component } from '@angular/core';
import { sidebarItem } from '../../interfaces/cardSidebar.interface';

@Component({
  selector: 'nasa-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPageComponent {
  sidebarVisible: boolean = true;
  public sidebarItems: sidebarItem[] = [
    {
      title: 'APOD - Astronomy Picture of the Day',
      urlImage: 'https://apod.nasa.gov/apod/image/1911/Arp273_HubblePohl_1824.jpg',
      path: 'APOD'
    },
    {
      title: 'Mars Rover Photos',
      urlImage: 'https://images.newscientist.com/wp-content/uploads/2022/08/16125835/SEI_119517887.jpg',
      path: 'mars-rover'
    },
    {
      title: 'NASA Image and Video Library',
      urlImage: 'https://live.staticflickr.com/65535/52211883534_f45cb76810_z.jpg',
      path: 'nasa-image-video'
    },
    {
      title: 'EPIC Earth Polychromatic Imaging Camera',
      urlImage: 'https://epic.gsfc.nasa.gov/contents/assets/Image_003.jpg',
      path: 'epic'
    },
    {
      title: 'Artemis',
      urlImage: 'data:image/jpeg;base64,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',
      path: 'artemis'
    },
    {
      title: 'SpaceX',
      urlImage: 'https://enfoquenoticias.com.mx/wp-content/uploads/2022/03/space.jpg',
      path: 'spaceX'
    },

  ]

  sidebarClose(value: boolean): void {
    this.sidebarVisible = value;
  }
}
