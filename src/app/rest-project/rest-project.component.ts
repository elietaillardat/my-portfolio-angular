import { RestService } from './rest.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rest-project',
  templateUrl: './rest-project.component.html',
  styleUrls: ['./rest-project.component.scss'],
})
export class RestProjectComponent implements OnInit {
  currentTime: string;
  consoleLogs: string[] = [];

  formValue = new FormControl(null, Validators.required);

  constructor(private restService: RestService) { 
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1);
  }

  ngOnInit() {
  }

  getRequest(data: any) {
    const res = data.target.attributes.data.value;
    this.restService.GET(res)
    .subscribe(data => {
      console.log("User Login: " + data.login);
      this.addLog("GET", res, "26");
    },
    err => {
      console.log("Error occured." + err.message)
    });
  }

  postRequest(data: any) {
    const val = this.formValue.value;
    const src = data.target.attributes.data.value;
    console.log(val);
    console.log(src);
    this.restService.POST(src)
    .subscribe(
      res => {
        console.log(res);
        this.addLog("POST", src, "06:30");
      },
      err => {
        console.log("Error occured." + err.message);
      }
    );
  }

  addLog(requestType: string, sensor: string, value: string) {
    const log = new Date().toLocaleDateString() + " " + this.currentTime + " > " + requestType + " " + sensor + ": " + value;
    this.consoleLogs.push(log);
  }

}
