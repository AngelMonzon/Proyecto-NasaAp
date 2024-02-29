import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { MarsRoverPhotosComponent } from './pages/mars-rover-photos/mars-rover-photos.component';
import { NasaImageVideoComponent } from './pages/nasa-image-video/nasa-image-video.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { APODComponent } from './pages/APOD/APOD.component';
import { EpicComponent } from './pages/epic/epic.component';
import { spaceXComponent } from './pages/spaceX/spaceX.component';
import { ArtemisComponent } from './pages/artemis/artemis.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'APOD', component: APODComponent},
      { path: 'mars-rover', component: MarsRoverPhotosComponent },
      { path: 'nasa-image-video', component: NasaImageVideoComponent},
      { path: 'epic', component: EpicComponent},
      { path: 'artemis', component: ArtemisComponent},
      { path: 'spaceX', component: spaceXComponent},
      { path: '**', redirectTo: 'APOD'},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class NasaRoutingModule { }
