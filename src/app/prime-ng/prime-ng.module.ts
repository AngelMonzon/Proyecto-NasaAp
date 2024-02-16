import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { PanelModule } from 'primeng/panel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { GalleriaModule } from 'primeng/galleria';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarModule,
    ButtonModule,
    ImageModule,
    PanelModule,
    SelectButtonModule,
    GalleriaModule,
    CardModule,
    CalendarModule,
    ToastModule,
    InputTextModule,
    ScrollPanelModule,
    PaginatorModule,
    TableModule
  ],
  providers: [MessageService]
})
export class PrimeNGModule { }
