import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './error404-page/error404-page.component';
import { SearchImageNasaComponent } from './search-image-nasa/search-image-nasa.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    Error404PageComponent,
    SearchImageNasaComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ],
  exports: [
    SearchImageNasaComponent
  ]
})
export class SharedModule { }
