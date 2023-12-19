import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { sidebarItem } from '../../interfaces/cardSidebar.interface';

@Component({
  selector: 'nasa-card-sidebar',
  templateUrl: './card-sidebar.component.html',
  styleUrl: './card-sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardSidebarComponent {

  @Output()
  public sidebarVisible = new EventEmitter<boolean>();

  @Input()
  public sideBarItem!: sidebarItem;

  sidebarClose(): void {
    this.sidebarVisible.emit(false);
  }
}
