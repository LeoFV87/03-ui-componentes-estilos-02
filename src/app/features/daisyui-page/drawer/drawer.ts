import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-drawer',
  imports: [RouterModule, RouterLinkActive],
  templateUrl: './drawer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Drawer { }
