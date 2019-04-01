import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter<Post>();

  constructor() {}

  ngOnInit() {}

  onAddPost() {
    if (this.enteredTitle.length > 0 && this.enteredContent.length > 0) {
      const post: Post = {
        title: this.enteredTitle,
        content: this.enteredContent
      };
      this.postCreated.emit(post);
      this.enteredTitle = '';
      this.enteredContent = '';
    } else {
      alert('Please fill both the fields!!!');
    }
  }
}
