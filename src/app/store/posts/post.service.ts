import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { PostsState, PostsStore } from './post.store';

@Injectable({
  providedIn: 'root',
})
export class PostService extends NgEntityService<PostsState> {
  constructor(protected store: PostsStore) {
    super(store);
  }

  getPosts() {
    this.get().subscribe((res) => this.store.add(res));
  }
}
