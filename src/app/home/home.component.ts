import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private postService: PostService) {}

  // Getter funktion för att hämta och reverse för att ändra ordning på posten "senaste inlägget högst upp"
  get allPosts(): Post[] {
    return this.postService.allPosts().reverse();
  }
}
