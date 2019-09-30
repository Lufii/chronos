import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EndpointsService } from '../endpoints/endpoints.service'

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();

  constructor(private endpoints: EndpointsService) { }

  ngOnInit() {
  }

  post={
    title: '',
    content: ''
  };

  hideAddPost() {
    this.closeModal.emit(false);
  }

  addPost() {
    console.log('a', this.post)
    this.endpoints.addPost(this.post).subscribe(res => {
      console.log('b')
      console.log(this.post);
      console.log(res);
    });
  }

}