import { ChangeDetectionStrategy, Component } from '@angular/core';
import { sidebarItem } from '../../interfaces/cardSidebar.interface';

@Component({
  selector: 'nasa-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPageComponent {
  sidebarVisible: boolean = false;
  public sidebarItems: sidebarItem[] = [
    {
      title: 'APOD - Astronomy Picture of the Day',
      urlImage: 'https://apod.nasa.gov/apod/image/1911/Arp273_HubblePohl_1824.jpg',
      alt: 'APOD'
    },
    {
      title: 'Mars Rover Photos',
      urlImage: 'https://images.newscientist.com/wp-content/uploads/2022/08/16125835/SEI_119517887.jpg',
      alt: 'Mars-rover'
    },
    {
      title: 'NASA Image and Video Library',
      urlImage: 'https://live.staticflickr.com/65535/52211883534_f45cb76810_z.jpg',
      alt: 'APOD'
    },
  ]
}
