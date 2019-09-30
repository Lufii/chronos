import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chronos';
  addPostVisible = false;

  onCloseModal() {
    this.addPostVisible=false; 
  }

  public isAddPostVisible = () => {
    return this.addPostVisible;
  }

  public addPostModal = () => {
    this.addPostVisible = true;
  }
}
