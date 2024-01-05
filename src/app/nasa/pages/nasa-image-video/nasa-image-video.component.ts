import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Item, Collection, NasaImages } from '../../interfaces/nasaImage.interface';
import { nasaImageService } from '../../services/nasaImage.service';
import { PaginatorState } from 'primeng/paginator/paginator.interface';

@Component({
  selector: 'app-nasa-image-video',
  templateUrl: './nasa-image-video.component.html',
  styleUrl: './nasa-image-video.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NasaImageVideoComponent implements OnInit{

  first?: number= 0;

  rows?: number  = 10;


  constructor(private nasaImageService: nasaImageService){
  }


  ngOnInit(): void {
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first;
    this.rows = event.rows;

    console.log("first", this.first)
    console.log("rows", this.rows)
  }


  get images(): Item[]{
    return this.nasaImageService.items
  }

  searchMediaNasa(term: string):void{
    this.nasaImageService.getMediaNasa(term);
  }

}

