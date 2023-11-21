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

  post(title: string, body: string, thumbnailUrl: string): void {
    this.postService.addPost(title, thumbnailUrl, body, new Date(), 0, 0, []);
    this.router.navigate(['/']);
    console.log(this.post);
  }
}
