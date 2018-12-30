import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-innovation-humanity',
  templateUrl: './innovation-humanity.component.html',
  styleUrls: ['./innovation-humanity.component.scss']
})
export class InnovationHumanityComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor(public router: Router) { }

  ngOnInit() {
    this.dtOptions = {
      paging: false,
      searching: false,
      info: false,
      ordering: false,
      columnDefs: [
        {
          targets: [1, 2],
          className: 'dt-center'
        },
        {
          targets: [-1],
          className: 'dt-right'
        }
      ]
    };
  }

}


