import { takeUntil } from 'rxjs/operators';
import { CardsService } from './cards.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit,OnDestroy {

  cards = [];
  filteredCards = [];
  searchDebounceTime = 500;
  searchValue:string;
  
  private destroy$: Subject<any> = new Subject();

  constructor(
    private cardsService: CardsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getCards();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getCards(){
    this.cardsService.getCards().pipe(takeUntil(this.destroy$)).subscribe(
      data =>{
        this.cards = data.cards;
        this.filteredCards = this.cards.slice();
      },
      error =>{
        console.log(`error`,error);
      }
    )
  }

  search(event){
    if(event){
      const filtered = this.cards.filter(val =>{
        return val.name.toLowerCase().includes(event.toLowerCase())
      })
      this.filteredCards = filtered;
    }else{
      this.filteredCards = this.cards;
    }
  }

  navigateToDetails(event){
    this.cardsService.updateCurrentSelectedDetailCard(event);
    this.router.navigate(['details/'+event.id]);
  }


}
