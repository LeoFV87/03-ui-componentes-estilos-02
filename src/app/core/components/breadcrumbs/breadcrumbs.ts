import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="breadcrumbs text-sm px-6 py-3 bg-base-200">
      <ul>
        @for (item of items(); track item.label) {
          <li>
            @if (item.link) {
              <a [routerLink]="item.link" class="link link-hover">{{ item.label }}</a>
            } @else {
              <span>{{ item.label }}</span>
            }
          </li>
        }
      </ul>
    </div>
  `
})
export class Breadcrumbs {
  items = input<{ label: string; link?: string }[]>([]);
}
