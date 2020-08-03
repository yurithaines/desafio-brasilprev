import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() card;
  @Output() seeDetailsEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  getUrlTypeImage(type): string {
    return './assets/images/' + type + '.png';
  }
  clickDetails(): void {
    this.seeDetailsEvent.emit(this.card);
  }

}
