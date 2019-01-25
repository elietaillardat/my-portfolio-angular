import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smart-devices',
  templateUrl: './smart-devices.component.html',
  styleUrls: ['./smart-devices.component.scss']
})
export class SmartDevicesComponent implements OnInit {
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
