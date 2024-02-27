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
      title: 'EONET - The Earth Observatory Natural Event Tracker',
      urlImage: 'https://concepto.de/wp-content/uploads/2018/02/desastres-naturales-e1518708889842.jpg',
      path: 'EONET'
    },
    {
      title: 'Exoplanet Archive',
      urlImage: 'https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/en-exclusiva/programados/un-exoplaneta-con-el-tamano-de-la-tierra-y-la-composicion-de-mercurio/6148068-1-esl-MX/Un-exoplaneta-con-el-tamano-de-la-Tierra-y-la-composicion-de-Mercurio.jpg',
      path: 'exoplanet'
    },

  ]

  sidebarClose(value: boolean): void{
    this.sidebarVisible = value;
  }
}
