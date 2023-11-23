import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  postId!: number;
  post: Post | undefined;
  likeImg = 'assets/heart2.png';
  dislikeImg = 'assets/dislike.png';

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = +params['id'];
      this.post = this.postService.getPostById(this.postId);
    });
  }

  likes(): void {
    if (this.post) {
      this.post.likes++;
      this.likeImg = 'assets/heart.png';

      this.updatePost();
    }
  }

  dislikes(): void {
    if (this.post) {
      this.post.dislikes++;
      this.dislikeImg = 'assets/dislike2.png';

      this.updatePost();
    }
  }

  /* Metod för att uppdatera localStorage med likes och dislikes på
  posten man befinner sig på, genom att lokalisera/matcha posten i den lokala arrayen och 
  uppdaterar/sparar arrayen till localStorage.
  */
  private updatePost(): void {
    if (this.post) {
      const posts = this.postService.getPosts();
      const index = posts.findIndex((i) => i.id === this.post?.id);
      posts[index] = this.post;
      this.postService.savePost(posts);
    }
  }
}
