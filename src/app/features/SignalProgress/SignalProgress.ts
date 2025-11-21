import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'signal-progress',
  imports: [CommonModule],
  templateUrl: './SignalProgress.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalProgress {

   valor: number = 0;


  actualizarProgreso(event: Event) {
    const input = event.target as HTMLInputElement;
    this.valor = Number(input.value);
  }


  progreso(): number {
    return this.valor;
  }

   colorProgreso(): string {
    if (this.valor < 40) {
      return 'bg-red-500';
    } else if (this.valor < 70) {
      return 'bg-yellow-500';
    } else {
      return 'bg-green-500';
    }
  }

 }
