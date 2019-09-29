import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../endpoints/endpoints.service'

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.scss']
})
export class MainDisplayComponent implements OnInit {

  constructor(private endpointsService: EndpointsService) { }

  public posts;

  ngOnInit() {
    this.endpointsService.getPosts().subscribe(res => {
      console.log(res);
      this.posts = res;
    })
  }

}
