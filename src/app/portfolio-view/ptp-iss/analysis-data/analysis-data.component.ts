import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analysis-data',
  templateUrl: './analysis-data.component.html',
  styleUrls: ['./analysis-data.component.scss']
})
export class AnalysisDataComponent implements OnInit {
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

