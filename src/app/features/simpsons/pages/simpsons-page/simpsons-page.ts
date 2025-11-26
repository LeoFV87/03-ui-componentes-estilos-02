import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { SimpsonsService } from '../../services/simpsons-service';
import { PaginationService } from '../../../../core/services/pagination.service';
import { Breadcrumbs } from '../../../../core/components/breadcrumbs/breadcrumbs';
import { HeroSimpsons } from '../../components/hero-simpsons/hero-simpsons';
import { Pagination } from '../../../../core/components/pagination/pagination';


@Component({
  selector: 'app-simpsons-page',
  standalone: true,
  imports: [CommonModule, RouterModule, Breadcrumbs, HeroSimpsons, Pagination ],
  templateUrl: './simpsons-page.html'
})
export class SimpsonsPage {

  private simpsonsService = inject(SimpsonsService);
  public paginationService = inject(PaginationService);

  charactersPerPage = signal(10);
  totalPages = signal(0);

  simpsonsResource = rxResource({
    params: () => ({
      page: this.paginationService.currentPage(),
      limit: this.charactersPerPage(),
    }),

    stream: ({ params }) => {

      return this.simpsonsService.getCharacters(params.page, params.limit);
    },
  });


   constructor() {
    effect(() => {
      const data = this.simpsonsResource.value();
      if (data) {
        this.totalPages.set(data.pages);
      }
    });
  }



}
