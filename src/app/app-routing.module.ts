import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'nasa',
    loadChildren: () => import('./nasa/nasa.module').then( m => m.NasaModule ),
  },
  {
    path: '',
    redirectTo: 'nasa',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Error404PageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
