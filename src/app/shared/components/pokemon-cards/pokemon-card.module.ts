import { MatButtonModule } from '@angular/material/button';
import { PokemonCardComponent } from './pokemon-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [PokemonCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule
  ],
  exports:[PokemonCardComponent]
})
export class PokemonCardModule { }
