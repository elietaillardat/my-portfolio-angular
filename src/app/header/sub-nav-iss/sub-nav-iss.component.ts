import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-nav-iss',
  templateUrl: './sub-nav-iss.component.html',
  styleUrls: ['./sub-nav-iss.component.scss']
})
export class SubNavIssComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
