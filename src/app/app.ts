import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Drawer } from "./features/daisyui-page/drawer/drawer";
import { Footer } from "./features/daisyui-page/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Drawer, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('03-ui-componentes-estilos');
}
