import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Item, MediaType } from '../../interfaces/nasaImage.interface';
import { nasaImageService } from '../../services/nasaImage.service';
import { PaginatorState } from 'primeng/paginator/paginator.interface';



@Component({
  selector: 'app-nasa-image-video',
  templateUrl: './nasa-image-video.component.html',
  styleUrl: './nasa-image-video.component.css',
})
export class NasaImageVideoComponent implements OnInit {

  MediaType = MediaType;

  //Variables para guardar imagenes
  public items!: Item[];

  public cutItems!: Item[];

  //Variables de Paginador
  first?: number = 0;

  rows?: number = 12;

  totalRecords?: number;



  constructor(private nasaImageService: nasaImageService, private cdr: ChangeDetectorRef) {

  }


  ngOnInit(): void {
    this.searchMediaNasa("mercury");
  }

  // Metodo para cambiar la posicion en el paginador
  //se obtendra un nuevo Array(this.cutItems) apartir del Array recortado(this.items) con los parametros indicados
  //por el paginador, event.first
  onPageChange(event: PaginatorState) {
    this.first = event.first;
    this.rows = event.rows;

    if(!(event.first == undefined) && !(this.rows == undefined)){
      this.cutItems = this.items.slice(event.first, event.first + this.rows)
    }

    console.log("first", this.first)
    console.log("rows", this.rows)
  }


  get images(): Item[]{
    return this.cutItems;
  }

  searchMediaNasa(term: string): void {
    this.first = 0;
    this.rows = 12;
    this.nasaImageService.getMediaNasa(term).subscribe(
      (result) => {
        this.items = result;
        if(!(this.first == undefined) && !(this.rows == undefined)){
          this.cutItems = result.slice(this.first, this.first + this.rows)
          this.totalRecords = result.length / this.rows;
          this.cdr.detectChanges();
          console.log(this.items[0]?.data[0].media_type);
        }
      }
    );
  }

}

