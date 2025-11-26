import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { SimpsonsService } from '../../services/simpsons-service';
import { PaginationService } from '../../../../core/services/pagination.service';


@Component({
  selector: 'app-simpsons-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './simpsons-page.html'
})
export class SimpsonsPage { 
  
  private simpsonsService = inject(SimpsonsService);
  public paginationService = inject(PaginationService);

  charactersPerPage = signal(10);

  simpsonsResource = rxResource({
    params: () => ({
      page: this.paginationService.currentPage(),
      limit: this.charactersPerPage(),
    }),

    stream: ({ params }) => {

      return this.simpsonsService.getCharacters(params.page, params.limit);
    },
  });
}
