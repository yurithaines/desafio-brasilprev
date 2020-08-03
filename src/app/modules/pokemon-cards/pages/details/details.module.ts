import { MatButtonModule } from '@angular/material/button';
import { AccordionModule } from './../../../../shared/components/accordion/accordion.module';
import { AccordionComponent } from './../../../../shared/components/accordion/accordion.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { DetailsComponent } from './details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: DetailsComponent,
}];

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
    AccordionModule,
    RouterModule.forChild(routes)
  ]
})
export class DetailsModule { }
