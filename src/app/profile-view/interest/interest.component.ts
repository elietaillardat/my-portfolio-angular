import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {

  @Input() iid: number;
  @Input() interestImg: string;
  @Input() interestTitle: string;
  @Input() interestDate: string;
  @Input() interestDescription: string;

  constructor() { }

  ngOnInit() {
  }

}

