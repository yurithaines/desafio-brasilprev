import { takeUntil } from 'rxjs/operators';
import { CardsService } from './../cards/cards.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  card;

  private destroy$: Subject<any> = new Subject();
  
  constructor(
    private cardsService: CardsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.card = this.cardsService.getCurrentSelectedDetailCard();
    const id = this.route.snapshot.params.id;
    if(!this.card){
      this.cardsService.getCardById(id).pipe(takeUntil(this.destroy$)).subscribe(
        data =>{
          this.card = data.card;
        },
        error =>{
          console.log(error);
        }
      )
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getUrlTypeImage(type): string {
    return './assets/images/' + type + '.png';
  }
  navigateToCards():void{
    this.router.navigate(['cards'])
  }

}
