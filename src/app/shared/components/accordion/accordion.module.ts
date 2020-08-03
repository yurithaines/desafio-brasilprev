import { AccordionComponent } from './accordion.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [AccordionComponent],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports:[AccordionComponent]
})
export class AccordionModule { }
