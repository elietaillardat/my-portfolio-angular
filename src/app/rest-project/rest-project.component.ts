import { RestService } from './rest.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rest-project',
  templateUrl: './rest-project.component.html',
  styleUrls: ['./rest-project.component.scss']
})
export class RestProjectComponent implements OnInit {

  constructor(private restService: RestService) { }

  ngOnInit() {
  }

  getExtTemp() {
    this.restService.getTest()
    .subscribe(data => {
      console.log("User Login: " + data.login);
      console.log("Bio: " + data.bio);
      console.log("Company: " + data.company);
    },
    err => {
      console.log("Error occured." + err.message)
    });
  }

  postOpeningHour() {
    this.restService.postTest()
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured." + err.message);
      }
    );
  }

}
