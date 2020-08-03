import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [

  {
    path: 'cards',
    loadChildren: () => import('./pages/cards/cards.module').then(m => m.CardsModule),
  },
  {
    path:'details/:id',
    loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsModule),
  },
  {
    path:'',
    redirectTo:'/cards'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonCardsRoutingModule {
}