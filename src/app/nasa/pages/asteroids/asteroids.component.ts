import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-asteroids',
  templateUrl: './asteroids.component.html',
  styleUrl: './asteroids.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsteroidsComponent { }
