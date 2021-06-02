import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface PostsState extends EntityState<any, number> {}

@StoreConfig({ name: 'posts' })
@Injectable({
  providedIn: 'root',
})
export class PostsStore extends EntityStore<PostsState> {
  constructor() {
    super();
  }
}
