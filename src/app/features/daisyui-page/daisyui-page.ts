import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Code } from './code/code';
import { TableComponent } from './table-component/table-component';
import { CardComponent } from './card-component/card-component';
import { CardResponsive } from './card-responsive/card-responsive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-daisyui-page',
  standalone: true,
  imports: [RouterModule,CommonModule, Code, TableComponent, CardComponent, CardResponsive],
  templateUrl: './daisyui-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyuiPage {




}
