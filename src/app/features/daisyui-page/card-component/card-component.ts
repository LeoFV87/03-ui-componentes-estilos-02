import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card-component',
  imports: [],
  templateUrl: './card-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent { }
