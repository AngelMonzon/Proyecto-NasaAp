import { ArtemisComponent } from './pages/artemis/artemis.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaRoutingModule } from './nasa-routing.module';
import { APODComponent } from './pages/APOD/APOD.component';
import { MarsRoverPhotosComponent } from './pages/mars-rover-photos/mars-rover-photos.component';
import { NasaImageVideoComponent } from './pages/nasa-image-video/nasa-image-video.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { CardSidebarComponent } from './components/card-sidebar/card-sidebar.component';
import { EpicComponent } from './pages/epic/epic.component';
import { spaceXComponent } from './pages/spaceX/spaceX.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardNasaImageComponent } from './components/card-nasa-image/card-nasa-image.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ArtemisComponent,
    APODComponent,
    MarsRoverPhotosComponent,
    NasaImageVideoComponent,
    LayoutPageComponent,
    CardSidebarComponent,
    EpicComponent,
    spaceXComponent,
    spaceXComponent,
    CardNasaImageComponent
  ],
  imports: [
    CommonModule,
    NasaRoutingModule,
    SharedModule,
    PrimeNGModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class NasaModule { }
