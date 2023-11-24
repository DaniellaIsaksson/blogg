import { Injectable } from '@angular/core';
import { Comment } from './comments';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  // array för att lagra comments
  private localComments: Comment[] = [];

  // Hämtar comments från localStorage
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
    // Skapa ny comment med denna information
    const newComment: Comment = {
      id: comments.length + 1,
      postId,
      body,
      creationDate,
    };
    /*lägger till ny comment i listan med befintliga comments
     och sparar den uppdaterade listan med comments till localStorage.*/
    comments.push(newComment);
    this.saveComments(comments);
  }
  // Metod för att hämta posts med specifikt ID och returnerar genom att matcha det angivna ID:et
  getCommentById(id: number): Comment | undefined {
    return this.localComments.find((comment) => comment.id === id);
  }
}
