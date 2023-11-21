import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private localPosts = 'posts';

  constructor() {}

  // Metod för att hämta posts från localStorage
  private getPosts(): Post[] {
    const storedPosts = localStorage.getItem(this.localPosts);
    return !storedPosts ? [] : JSON.parse(storedPosts);
  }

  // Metod för att spara posts till localStorage
  private savePost(posts: Post[]): void {
    localStorage.setItem(this.localPosts, JSON.stringify(posts));
  }

  // Metod för att hämta alla posts
  public allPosts(): Post[] {
    return this.getPosts();
  }

  // Metod för att lägga till ny post
  public addPost(
    title: string,
    thumbnailUrl: string,
    body: string,
    creationDate: Date,
    likes: number,
    dislikes: number,
    comments: string[]
  ): void {
    const newPost: Post = {
      title,
      thumbnailUrl,
      body,
      creationDate,
      likes: 0,
      dislikes: 0,
      comments: [],
    };
    /*
     * Hämtar existerande posts
     * Lägger till nya posts till arrayen posts
     * Sparar och uppdaterar posts till localStorage
     */
    const posts = this.getPosts();
    posts.push(newPost);
    this.savePost(posts);
  }
}
