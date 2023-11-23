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
  @Input() postId!: number;

  constructor(private commentService: CommentService) {}

  addComment(body: string): void {
    this.commentService.addComment(this.postId, body, new Date());
  }
  get comments(): Comment[] {
    return this.commentService
      .allComments()
      .filter((comment) => comment.postId === this.postId)
      .reverse();
  }
}
