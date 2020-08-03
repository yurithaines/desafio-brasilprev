import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/pokemon-cards/pokemon-cards.module').then(m => m.PokemonCardsModule),
  },
  {
    path: '*',
    redirectTo:'/cards'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}