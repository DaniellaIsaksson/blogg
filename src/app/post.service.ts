import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private localPosts: Post[] = [];

  constructor() {
    this.localPosts = this.getPosts();
  }

  // Metod för att hämta posts från localStorage
  public getPosts(): Post[] {
    const storedPosts = localStorage.getItem('posts');
    return !storedPosts ? [] : JSON.parse(storedPosts);
  }

  // Metod för att spara posts till localStorage
  public savePost(posts: Post[]): void {
    localStorage.setItem('posts', JSON.stringify(posts));
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
    comments: Comment[]
  ): void {
    const posts = this.getPosts();

    const newPost: Post = {
      id: posts.length + 1,
      title,
      thumbnailUrl,
      body,
      creationDate,
      likes,
      dislikes,
      comments: [],
    };

    posts.push(newPost);
    this.savePost(posts);
  }

  getPostById(id: number): Post | undefined {
    const posts = this.getPosts();
    return posts.find((post) => post.id === id);
  }
}
