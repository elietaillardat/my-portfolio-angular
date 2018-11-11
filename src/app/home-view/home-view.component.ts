import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor() {}

  ngOnInit() {
    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
    };
    this.myParams = {
      particles: {
          number: {
              value: 55,
          },
          size: {
            value: 7,
          },
          color: {
              value: '#ffffff'
          },
          shape: {
              type: 'circle',
          },
      }
    };
  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "end"});
  }

}
