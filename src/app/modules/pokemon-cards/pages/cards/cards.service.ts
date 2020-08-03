import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class CardsService {
  constructor(private http: HttpClient) {}

  private currentSelectedDetailCard;

  getCards():Observable<any> {
    return this.http.get(environment.api + "cards");
  }
  getCardById(id): Observable<any>{
    return this.http.get(environment.api + "cards/"+id);
  }
  updateCurrentSelectedDetailCard(card?){
    this.currentSelectedDetailCard = card ? card : null;
  }
  getCurrentSelectedDetailCard(){
    return this.currentSelectedDetailCard;
  }
}