import { EntityState, EntityStore, Store, StoreConfig } from '@datorama/akita';
import { ICard } from './card.model';
import { Injectable } from '@angular/core';

export interface CardsState extends EntityState<ICard, number> {}

@StoreConfig({ name: 'cards' })
@Injectable({
  providedIn: 'root',
})
export class CardsStore extends EntityStore<CardsState> {
  constructor() {
    super();
  }
}
