import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-table-component',
  imports: [],
  templateUrl: './table-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent { }
