import { PostsQuery } from './store/posts/post.query';
import { CardsService } from './store/cards/card.service';
import { CardsQuery } from './store/cards/card.query';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ECardStatus, ICard } from './store/cards/card.model';
import { PostService } from './store/posts/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toDoCards$: Observable<ICard[]>;
  inProgressCards$: Observable<ICard[]>;
  doneCards$: Observable<ICard[]>;
  posts$: Observable<any[]>;

  id = 1;
  cardStatusEnum = ECardStatus;

  taskMessage = '';

  constructor(
    private cardQuery: CardsQuery,
    private cardService: CardsService,
    private postService: PostService,
    private postsQuery: PostsQuery
  ) {}

  ngOnInit() {
    this.toDoCards$ = this.cardQuery.selectToDoCards();
    this.inProgressCards$ = this.cardQuery.selectInProgressCards();
    this.doneCards$ = this.cardQuery.selectDoneCards();
    this.posts$ = this.postsQuery.selectAll();
  }

  onMoveCard(card: ICard, newCardStatus: ECardStatus) {
    this.cardService.changeStatus(card.id, newCardStatus);
  }

  onAddTask() {
    const card: ICard = {
      id: this.id++,
      message: this.taskMessage,
      status: ECardStatus.ToDo,
    };
    this.cardService.add(card);
    this.taskMessage = '';
  }

  onLoadPosts() {
    this.postService.getPosts();
  }
}
