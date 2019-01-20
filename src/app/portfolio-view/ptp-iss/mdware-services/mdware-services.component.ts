import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mdware-services',
  templateUrl: './mdware-services.component.html',
  styleUrls: ['./mdware-services.component.scss']
})
export class MdwareServicesComponent implements OnInit {
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
          targets: [-1],
          className: 'dt-center'
        }
      ]
    };
  }

}

