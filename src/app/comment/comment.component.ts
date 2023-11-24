// CommentComponent in comment.component.ts
import { Component, Input } from '@angular/core';
import { CommentService } from '../comment.service';
import { Comment } from '../comments';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  // Deklarerar att PostId är en inmatningsparameter för komponenten
  @Input() postId!: number;

  constructor(private commentService: CommentService) {}
  // Metod för att lägga till nya comments
  addComment(body: string): void {
    this.commentService.addComment(this.postId, body, new Date());
  }
  // Getter funktion för att hämta comments.
  get comments(): Comment[] {
    //  Hämtar alla comments och filtrerar dem för den aktuella posten och reverse för att den senaste kommentaren kommer först.
    return this.commentService
      .allComments()
      .filter((comment) => comment.postId === this.postId)
      .reverse();
  }
}
