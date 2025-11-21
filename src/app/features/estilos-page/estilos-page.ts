import { Component } from '@angular/core';
import { SignalBoxComponent } from '../SignalBoxComponent/SignalBoxComponent';
import { SignalProgress } from '../SignalProgress/SignalProgress';


@Component({
  selector: 'app-estilos-page',
  standalone: true,
  imports: [SignalBoxComponent,SignalProgress],
  templateUrl: './estilos-page.html',
  styleUrl: './estilos-page.css',
})
export class EstilosPage {

}
