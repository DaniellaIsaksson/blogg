import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent {
  constructor(private postService: PostService, private router: Router) {}

  // Metod för att skapa och lägga till nya inlägg och när posts har skapats navigeras man till home page.
  post(title: string, body: string, thumbnailUrl: string): void {
    this.postService.addPost(title, thumbnailUrl, body, new Date(), 0, 0, []);
    this.router.navigate(['/']);
  }
}
