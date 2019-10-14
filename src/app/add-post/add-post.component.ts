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

  categories = ['Entropy', 'Spirit', 'Music', 'Books', 'Core', 'Summaries', 'Moods', 'Plans'];
  selectedCategories = [false, false, false, false, false, false, false, false];

  post={
    title: '',
    content: '',
    categories: []
  };

  hideAddPost() {
    this.closeModal.emit(false);
  }

  addPost() {
    let j=0;
    console.log('q', this.selectedCategories);
    for (let i=0; i<this.selectedCategories.length; i++)
      if(!this.selectedCategories[i]){
        this.categories.splice(i-j,1);
        j++;
      }
    console.log('w', this.categories);
    this.post.categories = this.categories;
    this.endpoints.addPost(this.post).subscribe(res => {
      console.log('b')
      console.log(this.post);
      console.log(res);
    });
    window.location.href = "http://localhost:4200/";
  }

}