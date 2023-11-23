import { Injectable } from '@angular/core';
import { Comment } from './comments';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private localComments: Comment[] = [];

  constructor() {
    this.localComments = this.getComments();
  }

  //Metod för att hämta kommentarer från localStorage
  private getComments(): Comment[] {
    const storedComments = localStorage.getItem('comments');
    return !storedComments ? [] : JSON.parse(storedComments);
  }

  // Metod för att spara alla kommentarer till localStorage
  private saveComments(comments: Comment[]): void {
    localStorage.setItem('comments', JSON.stringify(comments));
  }

  // Metod för att hämta alla kommentarer
  public allComments(): Comment[] {
    return this.getComments();
  }

  // Metod för att lägga till nya kommentarer
  public addComment(postId: number, body: string, creationDate: Date): void {
    const comments = this.getComments();

    const newComment: Comment = {
      id: comments.length + 1,
      postId,
      body,
      creationDate,
    };

    comments.push(newComment);
    this.saveComments(comments);
  }

  getCommentById(id: number): Comment | undefined {
    return this.localComments.find((comment) => comment.id === id);
  }
}
