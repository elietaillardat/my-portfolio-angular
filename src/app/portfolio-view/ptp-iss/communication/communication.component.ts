import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {
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
      ]
    };
  }

}
