import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { ThemeSwitcher } from '../../../core/components/theme-switcher/theme-switcher';

@Component({
  selector: 'app-drawer',
  imports: [RouterModule, RouterLinkActive, ThemeSwitcher],
  templateUrl: './drawer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Drawer { }
