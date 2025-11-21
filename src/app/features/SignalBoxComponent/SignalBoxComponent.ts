import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({

  selector: 'signal-box-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './SignalBoxComponent.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SignalBoxComponent {

  valor = signal<number>(0);

  cambiarValor(event: Event) {
    const input = event.target as HTMLInputElement;
    const nuevoValor = Number(input.value);
    this.valor.set(nuevoValor);
  }


}