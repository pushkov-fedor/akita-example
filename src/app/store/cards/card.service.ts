import { ECardStatus, ICard } from './card.model';
import { Injectable } from '@angular/core';
import { CardsStore } from './card.store';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(private cardsStore: CardsStore) {}

  changeStatus(cardId: number, newStatus: ECardStatus) {
    this.cardsStore.update(cardId, { status: newStatus });
  }

  add(card: ICard) {
    this.cardsStore.add(card);
  }
}
