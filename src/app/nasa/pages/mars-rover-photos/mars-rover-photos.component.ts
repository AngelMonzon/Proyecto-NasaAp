import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MarsRoverPhotosService } from '../../services/mars-rover.service';
import { Photo } from '../../interfaces/rovers.interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-mars-rover-photos',
  templateUrl: './mars-rover-photos.component.html',
  styleUrl: './mars-rover-photos.component.css',
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

  //Variables para almacenar fotos de rovers
  public photosCuriosity: Photo[] | undefined;
  public photosOpportunity: Photo[] | undefined;
  public photosSpirit: Photo[] | undefined;

  //Variables Date para Rovers
  dateCuriosity: Date = new Date(2020, 9, 20);
  dateOpportunity: Date = new Date(2005, 1, 18);
  dateSpirit: Date = new Date(2004, 11, 24);

  // Fecha minima para rovers
  minDateCuriosity: Date = new Date(2012, 7, 6);
  minDateOpportunity: Date = new Date(2004, 0, 26);
  minDateSpirit: Date = new Date(2004, 0, 5);

  // Fecha maxima para rovers
  maxDateOpportunity: Date = new Date(2018, 5, 9);
  maxDateSpirit: Date = new Date(2012, 7, 6);

  //Variables para iconos load
  mstrIconCuriosity: boolean = true;
  mstrIconOportunity: boolean = true;
  mstrIconSpirit: boolean = true;

constructor(
  private marsRoverPhotosService: MarsRoverPhotosService,
  private messageService: MessageService,
  private cdr: ChangeDetectorRef)
  {
  this.updatePhotosRover('curiosity');
  this.updatePhotosRover('opportunity');
  this.updatePhotosRover('spirit');
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
      return this.photosCuriosity;
    case 'opportunity':
      return this.photosOpportunity;
    case 'spirit':
      return this.photosSpirit;
    default:
      return
  }
}

// Mostrar Galeria y actualizar arreglo e imagenes
showGallery(rover: string){
  this.selectRover = rover;
  console.log('curiosity', this.photosCuriosity)
  console.log('opportunity', this.photosOpportunity)
  console.log('Spirit', this.photosSpirit)

  switch (rover) {
    case 'curiosity':
      if(this.photosCuriosity)
      if(this.photosCuriosity.length == 0) {
        this.displayGallery = false;
        this.showInfo();
        break};
      this.displayGallery = true;
      break;

    case 'opportunity':
      if(this.photosOpportunity)
      if(this.photosOpportunity.length == 0) {
        this.displayGallery = false;
        this.showInfo();
        break};
      this.displayGallery = true;
      break;

    case 'spirit':
      if(this.photosSpirit)
      if(this.photosSpirit.length == 0) {
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
      this.mstrIconCuriosity = true;
      this.marsRoverPhotosService.searchPhotosMars(rover, this.dateCuriosity).subscribe(
        (result) => {
          this.photosCuriosity = result;
          this.mstrIconCuriosity = false;
          this.cdr.detectChanges();
        },
        (error) => {
          this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Error searching for images' });
          console.error('Error al buscar fotos de Marte:', error);
        }
      )
      break;
    case 'opportunity':
      this.mstrIconOportunity = true;
      this.marsRoverPhotosService.searchPhotosMars(rover, this.dateOpportunity).subscribe(
        (result) => {
          this.photosOpportunity = result;
          this.mstrIconOportunity = false;
          this.cdr.detectChanges();
        },
        (error) => {
          this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Error searching for images' });
          console.error('Error al buscar fotos de Marte:', error);
        }
      )
      break;
    case 'spirit':
      this.mstrIconSpirit = true;
      this.marsRoverPhotosService.searchPhotosMars(rover, this.dateSpirit).subscribe(
        (result) => {
          this.photosSpirit = result;
          this.mstrIconSpirit = false;
          this.cdr.detectChanges();
        },
        (error) => {
          this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Error searching for images' });
          console.error('Error al buscar fotos de Marte:', error);
        }
      )
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

//Funciones para cambiar valor a variables de iconos load

toggleIconCuriosity() {
  this.mstrIconCuriosity = !this.mstrIconCuriosity;
}
toggleIconOportunity() {
  this.mstrIconOportunity = !this.mstrIconOportunity;
}
toggleIconSpirit() {
  this.mstrIconSpirit = !this.mstrIconSpirit;
}



}
