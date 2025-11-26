import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap, tap } from 'rxjs';
import { SimpsonsService } from '../../services/simpsons-service';

@Component({
  selector: 'app-simpsons-detail-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './simpsons-detail-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpsonDetailPage {


  private route = inject(ActivatedRoute);
  private service = inject(SimpsonsService);

  personaje = toSignal(
    this.route.paramMap.pipe(
      map(params => +params.get('id')!),
      switchMap(id => this.service.getCharacterById(id)),
      // ✅ LOG PARA DEBUGGING: Imprimir el objeto antes de convertirlo a señal
      tap(p => {
        if (p) {
            console.log("Objeto Personaje Completo:", p);
            console.log("Ruta de Imagen:", p.portrait_path);
        }
      })
    ),
    { initialValue: null }
  );



}