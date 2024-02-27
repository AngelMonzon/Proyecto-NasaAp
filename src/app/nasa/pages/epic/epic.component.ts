import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EpicService } from '../../services/epic.service';
import { EpicMD } from '../../interfaces/epic';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-asteroids',
  templateUrl: './epic.component.html',
  styleUrl: './epic.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpicComponent implements OnInit {


  //Variables para guardar imagenes
  public items!: EpicMD[];

  //Variable para fecha seleccionada
  date: Date = new Date(2019, 4, 30);

  minDate: Date = new Date(2015, 8, 6);

  maxDate: Date = new Date();

  displayGallery: boolean = false;

  responsiveOptions: any[] | undefined;

  //Variable para cargar icono de carga
  mstrIcon: boolean = true;

  baseLink: string = "https://epic.gsfc.nasa.gov/archive/natural/";

  link: string = "https://epic.gsfc.nasa.gov/archive/natural/2019/05/30/jpg/";


  constructor(
    private epicService: EpicService,
    private cdr: ChangeDetectorRef,
    private messageService: MessageService) {
    this.updateEpic(this.date);
  }


  ngOnInit(): void {

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

    throw new Error('Method not implemented.');


  }

  //Funcion para actualizar link
  updateLink(date: Date): void {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const url = `${this.baseLink}${year}/${month}/${day}/jpg/`;

    this.link = url;
  }

  //Funcion para actualizar las imagenes
  updateEpic(date: Date): void {
    this.updateLink(date);
    this.mstrIcon = true;
    this.epicService.getMediaEpic(date).subscribe(
      (result) => {
        this.items = result;
        console.log(this.items)
        this.mstrIcon = false;
        this.cdr.detectChanges();
      },
      (error) => {
        this.showInfo();
        console.error('Error al buscar fotos de Marte:', error);
      }
    )
  }

  getImages(): EpicMD[] {
    return this.items;
  }

  toggleGallery(): void {
    if (this.items.length > 0) {
      this.displayGallery = !this.displayGallery;
    } else{
      this.showInfo();
    }

  }

  //Metodo para mostrar advertencia cuando la fecha seleccionada no contiene imagenes
  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'The selected date does not contain images' });
    console.log('Advertencia lanzada')
  }


}
