import { OrderModule } from 'ngx-order-pipe';
import { CardsComponent } from './cards.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardModule } from 'src/app/shared/components/pokemon-cards/pokemon-card.module';
import { Routes, RouterModule } from '@angular/router';
import { InputTextModule } from 'src/app/shared/components/input-text/input-text.module';

const routes: Routes = [{
  path: '',
  component: CardsComponent,
}];

@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InputTextModule,
    OrderModule,
    PokemonCardModule,
  ]
})
export class CardsModule { }
