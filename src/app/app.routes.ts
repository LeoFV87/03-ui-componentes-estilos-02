import { Routes } from '@angular/router';
import { EstilosPage } from './features/estilos-page/estilos-page';
import { DaisyuiPage } from './features/daisyui-page/daisyui-page';
import { SimpsonsPage } from './features/simpsons/pages/simpsons-page/simpsons-page';
import { SimpsonDetailPage } from './features/simpsons/pages/simpsons-detail-page/simpsons-detail-page';

export const routes: Routes = [

  {
    path: '',
    component: DaisyuiPage

  },
  {

    path: 'estilos',
    component: EstilosPage
  },
  {
    path: 'simpsons',
    component: SimpsonsPage

  },
  {
    path: 'simpsons/:id',
    component: SimpsonDetailPage
  }



];
