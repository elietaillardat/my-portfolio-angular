import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-innovative-project',
  templateUrl: './innovative-project.component.html',
  styleUrls: ['./innovative-project.component.scss']
})
export class InnovativeProjectComponent implements OnInit {
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



