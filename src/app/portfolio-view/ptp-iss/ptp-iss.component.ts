import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ptp-iss',
  templateUrl: './ptp-iss.component.html',
  styleUrls: ['./ptp-iss.component.scss']
})
export class PtpIssComponent implements OnInit {
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
            targets: [2, -1],
            className: 'dt-body-right'
        }
      ]
    };
  }
  

}
