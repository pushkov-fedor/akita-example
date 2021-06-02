import { ECardStatus } from './card.model';
import { Query, QueryEntity, Store } from '@datorama/akita';
import { CardsState, CardsStore } from './card.store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardsQuery extends QueryEntity<CardsState> {
  constructor(protected store: CardsStore) {
    super(store);
  }

  selectToDoCards() {
    return this.selectAll({
      filterBy: [(entity) => entity.status === ECardStatus.ToDo],
    });
  }

  selectInProgressCards() {
    return this.selectAll({
      filterBy: [(entity) => entity.status === ECardStatus.InProgress],
    });
  }

  selectDoneCards() {
    return this.selectAll({
      filterBy: [(entity) => entity.status === ECardStatus.Done],
    });
  }
}
