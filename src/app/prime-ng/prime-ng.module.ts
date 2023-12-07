import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarModule,
    ButtonModule,
    ImageModule
  ]
})
export class PrimeNGModule { }
