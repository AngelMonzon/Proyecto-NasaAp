import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { MarsRoverPhotosComponent } from './pages/mars-rover-photos/mars-rover-photos.component';
import { NasaImageVideoComponent } from './pages/nasa-image-video/nasa-image-video.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { APODComponent } from './pages/APOD/APOD.component';
import { AsteroidsComponent } from './pages/asteroids/asteroids.component';
import { EonetComponent } from './pages/eonet/eonet.component';
import { ExoplanetComponent } from './pages/exoplanet/exoplanet.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'APOD', component: APODComponent},
      { path: 'mars-rover', component: MarsRoverPhotosComponent },
      { path: 'nasa-image-video', component: NasaImageVideoComponent},
      { path: 'asteroids', component: AsteroidsComponent},
      { path: 'eonet', component: EonetComponent},
      { path: 'exoplanet', component: ExoplanetComponent},
      { path: '**', redirectTo: 'APOD'},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class NasaRoutingModule { }
