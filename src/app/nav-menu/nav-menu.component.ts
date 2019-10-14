import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  @Output() category = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.category.emit(this.displayCategory);
  }

  categories = ['Entropy', 'Spirit', 'Music', 'Books', 'Core', 'Summaries', 'Moods', 'Plans'];
  currentIndex = 0;
  displayCategory = 'Entropy';
  
  
  public nextCategory = () => {
    this.currentIndex++;
    this.renderCategory();
  }

  public previousCategory = () => {
    this.currentIndex--;
    if(this.currentIndex<0)
      this.currentIndex=this.currentIndex+this.categories.length;
    this.renderCategory();
  }

  private renderCategory = () => {
    this.displayCategory = this.categories[this.currentIndex%this.categories.length];
    this.category.emit(this.displayCategory);
  }

}
