import { Component, OnInit, Input } from '@angular/core';
import { EndpointsService } from '../endpoints/endpoints.service'

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.scss']
})
export class MainDisplayComponent implements OnInit {
  @Input() category: string;
  constructor(private endpointsService: EndpointsService) { }

  public posts;

  ngOnInit() {
    console.log(this.filterCategory)
    this.endpointsService.getPosts().subscribe(res => {
      this.posts = res;
    })
  }

}
