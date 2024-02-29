import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Sanitizer } from '@angular/core';
import { ArtemisService } from '../../services/artemis.service';
import { Artemis, Item2 } from '../../interfaces/artemis.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-eonet',
  templateUrl: './artemis.component.html',
  styleUrl: './artemis.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArtemisComponent implements OnInit {
  playlistId = 'PL2aBZuCeDwlS_2sGfYSvcoJZLRG069i-H';

  playlistItems: Item2[] = [];

  public url: string = "https://www.youtube.com/embed/";
  public urlDefault: string = "https://www.youtube.com/embed/_tdsia6EZY8";

  public sanitizedUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

  //Variables de Paginador
  first?: number = 0;

  rows?: number = 1;

  totalRecords?: number;

  page?: number = 0;

  constructor(
    private artemisService: ArtemisService,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.artemisService.getPlaylist(this.playlistId).subscribe(
      (data) => {
        this.playlistItems = data.items;
        console.log(this.playlistItems);
        console.log(this.playlistItems[1].snippet.resourceId.videoId);
        this.totalRecords = data.items.length;
        this.cdr.detectChanges()
      },
      (error) => {
        console.error('Error obteniendo la lista de reproducción:', error);
      }
    );
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first;
    this.rows = event.rows;

    this.page = event.page;


    console.log("first", this.first);
    console.log("rows", this.rows);
    console.log("page", event.page);
  }

  get SafeUrl(): SafeResourceUrl {
    if(this.playlistItems.length > 0 && !(this.page == undefined) && !(this.playlistItems[this.page] == undefined)){
      let videoId: string = this.playlistItems[this.page].snippet.resourceId.videoId;
      const url = `https://www.youtube.com/embed/${videoId}`;

      console.log("Si cargo el video")
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.urlDefault);
  }

  get title(): string {
    if(this.playlistItems.length > 0 && !(this.page == undefined)){
      let title: string = this.playlistItems[this.page].snippet.title;
      return title;
    }
    return "Error";
  }

  get description(): string {
    if(this.playlistItems.length > 0 && !(this.page == undefined)){
      let description: string = this.playlistItems[this.page].snippet.description;
      return description;
    }
    return "Error";
  }
}
