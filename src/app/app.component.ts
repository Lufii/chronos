import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chronos';
  addPostVisible = false;
  sendCategory = '';

  onCloseModal() {
    this.addPostVisible=false; 
  }

  onCategoryChange(category: string){
    this.sendCategory = category;
  }

  public isAddPostVisible = () => {
    return this.addPostVisible;
  }

  public addPostModal = () => {
    this.addPostVisible = true;
  }
}
