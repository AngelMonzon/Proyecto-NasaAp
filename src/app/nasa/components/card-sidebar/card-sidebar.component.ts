import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { sidebarItem } from '../../interfaces/cardSidebar.interface';

@Component({
  selector: 'nasa-card-sidebar',
  templateUrl: './card-sidebar.component.html',
  styleUrl: './card-sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardSidebarComponent {
  @Input()
  public sideBarItem!: sidebarItem;
}
