import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { APODService } from '../../services/apod.service';
import { Apod } from '../../interfaces/APOD.interface';

@Component({
  selector: 'app-apod',
  templateUrl: './APOD.component.html',
  styleUrl: './APOD.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class APODComponent implements OnInit {

  constructor(private apodService: APODService){}

  ngOnInit(): void {
    this.apodService.getArticle()
  }

  get article(): Apod {
    return this.apodService.apodArticle;
  }
}
