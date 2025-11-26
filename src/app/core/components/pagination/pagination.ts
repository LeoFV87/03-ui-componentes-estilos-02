import { Component, computed, input, linkedSignal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="join flex justify-center items-center gap-2">
      <button class="join-item btn" (click)="previousPage()" [routerLink]="[]" [queryParams]="{ page: activePage() - 1 }" [disabled]="activePage() === 1">«</button>

      @for (page of getPagesList(); track page) {
        <button class="join-item btn" [class.btn-primary]="page === activePage()" [routerLink]="[]" [queryParams]="{ page: page }" (click)="activePage.set(page)">
          {{ page }}
        </button>
      }

      <button class="join-item btn" [routerLink]="[]" [queryParams]="{ page: activePage() + 1 }" (click)="nextPage()" [disabled]="activePage() === pages()">»</button>
    </div>
  `
})
export class Pagination {
  pages = input(0);
  currentPage = input<number>(1);

  // Sincroniza la señal interna con el input
  activePage = linkedSignal(() => this.currentPage());

  getPagesList = computed(() => {
    const totalPages = this.pages();
    const current = this.activePage();

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const start = Math.max(1, current - 2);
    const end = Math.min(totalPages, start + 4);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  });

  previousPage() {
    if (this.activePage() > 1) this.activePage.update((n) => n - 1);
  }

  nextPage() {
    if (this.activePage() < this.pages()) this.activePage.update((n) => n + 1);
  }
}
