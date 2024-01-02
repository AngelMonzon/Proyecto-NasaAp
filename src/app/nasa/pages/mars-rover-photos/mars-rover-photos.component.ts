import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MarsRoverPhotosService } from '../../services/mars-rover.service';
import { Photo } from '../../interfaces/rovers.interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-mars-rover-photos',
  templateUrl: './mars-rover-photos.component.html',
  styleUrl: './mars-rover-photos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarsRoverPhotosComponent implements OnInit {

  value: string = 'Curiosity';
  rovers: any[] = [
    { name: 'Curiosity', value: 'Curiosity' },
    { name: 'Opportunity', value: 'Opportunity' },
    { name: 'Spirit', value: 'Spirit' }
];



  responsiveOptions: any[] | undefined;

  displayGallery: boolean = false;

  selectRover!: string;

  //Variables Date para Rovers
  dateCuriosity: Date = new Date(2012, 7, 18);
  dateOpportunity: Date = new Date(2005, 1, 18);
  dateSpirit: Date = new Date(2004, 11, 24);

  // Fecha minima para rovers
  minDateCuriosity: Date = new Date(2012, 7, 6);
  minDateOpportunity: Date = new Date(2004, 0, 26);
  minDateSpirit: Date = new Date(2004, 0, 5);

  // Fecha maxima para rovers
  maxDateOpportunity: Date = new Date(2018, 5, 9);
  maxDateSpirit: Date = new Date(2012, 7, 6);

constructor(
  private marsRoverPhotosService: MarsRoverPhotosService,
  private messageService: MessageService)
  {
  this.marsRoverPhotosService.searchPhotosMars('curiosity', this.dateCuriosity);
  this.marsRoverPhotosService.searchPhotosMars('opportunity', this.dateOpportunity);
  this.marsRoverPhotosService.searchPhotosMars('spirit', this.dateSpirit);
}

ngOnInit() {
    this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];
}

getImages(rover: string):Photo[] | undefined{

  switch (rover) {
    case 'curiosity':
      return this.marsRoverPhotosService.photosCuriosity;
    case 'opportunity':
      return this.marsRoverPhotosService.photosOpportunity;
    case 'spirit':
      return this.marsRoverPhotosService.photosSpirit;
    default:
      return
  }
}

get imagesOpportunity():Photo[] {
  return this.marsRoverPhotosService.photosOpportunity
}

get imagesSpirit():Photo[] {
  return this.marsRoverPhotosService.photosSpirit
}

// Mostrar Galeria y actualizar arreglo e imagenes
showGallery(rover: string){
  this.selectRover = rover;
  console.log('curiosity', this.marsRoverPhotosService.photosCuriosity)
  console.log('opportunity', this.marsRoverPhotosService.photosOpportunity)
  console.log('Spirit', this.marsRoverPhotosService.photosSpirit)

  switch (rover) {
    case 'curiosity':
      if(this.marsRoverPhotosService.photosCuriosity.length == 0) {
        this.displayGallery = false;
        this.showInfo();
        break};
      this.displayGallery = true;
      break;

    case 'opportunity':
      if(this.marsRoverPhotosService.photosOpportunity.length == 0) {
        this.displayGallery = false;
        this.showInfo();
        break};
      this.displayGallery = true;
      break;

    case 'spirit':
      if(this.marsRoverPhotosService.photosSpirit.length == 0) {
        this.displayGallery = false;
        this.showInfo();
        break};
      this.displayGallery = true;
      break;
    default:
      break;
  }
}

// Metodo para actualizar el array de Imagenes de el servicio
updatePhotosRover(rover: string){
  switch (rover) {
    case 'curiosity':
      this.marsRoverPhotosService.searchPhotosMars(rover, this.dateCuriosity);
      break;
    case 'opportunity':
      this.marsRoverPhotosService.searchPhotosMars(rover, this.dateOpportunity);
      break;
    case 'spirit':
      this.marsRoverPhotosService.searchPhotosMars(rover, this.dateSpirit);
      break;

    default:
      break;
  }
}

//Metodo para mostrar advertencia cuando la fecha seleccionada no contiene imagenes
showInfo() {
  this.messageService.add({ severity: 'info', summary: 'Info', detail: 'The selected date does not contain images' });
  console.log('Advertencia lanzada')
}



}
