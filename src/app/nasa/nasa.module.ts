import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaRoutingModule } from './nasa-routing.module';
import { APODComponent } from './pages/APOD/APOD.component';
import { MarsRoverPhotosComponent } from './pages/mars-rover-photos/mars-rover-photos.component';
import { NasaImageVideoComponent } from './pages/nasa-image-video/nasa-image-video.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { CardSidebarComponent } from './components/card-sidebar/card-sidebar.component';
import { AsteroidsComponent } from './pages/asteroids/asteroids.component';
import { EonetComponent } from './pages/eonet/eonet.component';
import { ExoplanetComponent } from './pages/exoplanet/exoplanet.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    APODComponent,
    MarsRoverPhotosComponent,
    NasaImageVideoComponent,
    LayoutPageComponent,
    CardSidebarComponent,
    AsteroidsComponent,
    EonetComponent,
    ExoplanetComponent,
  ],
  imports: [
    CommonModule,
    NasaRoutingModule,

    PrimeNGModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class NasaModule { }
