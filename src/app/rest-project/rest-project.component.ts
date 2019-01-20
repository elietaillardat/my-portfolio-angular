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
  showSpinner: boolean;

  extTemp: any;
  heaterState: any;

  formValue = new FormControl(null, Validators.required);

  constructor(private restService: RestService) { 
    this.showSpinner = false;
    this.heaterState = false;
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
  }

  ngOnInit() {
  }

  getRequest(src: any) {
    this.showSpinner = true;
    this.restService.GET(src)
    .subscribe(
      data => {
        console.log(data.toString())
        this.showSpinner = false;
        this.addLog("GET", src, data.toString());
        this.heaterState = data;
        this.extTemp = Number(data).toFixed(1);
      },
      err => {
        this.showSpinner = false;
        console.log("Error occured." + err.message)
      }
    );
  }

  postRequest(src: any) {
    this.showSpinner = true;
    const val = this.formValue.value;
    this.restService.POST(src, val)
    .subscribe(
      () => {
        this.showSpinner = false;
        this.addLog("POST", src, val.toString());
      },
      err => {
        this.showSpinner = false;
        console.log("Error occured." + err.message);
      }
    );
  }

  updateValue(data: any) {
    
  }

  addLog(requestType: string, sensor: string, value: string) {
    const log = new Date().toLocaleDateString() + " " + this.currentTime + " > " + requestType + " " + sensor + ": " + value;
    this.consoleLogs.unshift(log);
    if (this.consoleLogs.length > 10) this.consoleLogs.pop();
  }

  getState(state: boolean): string {
    if (state) {
      return "ON"
    } else {
      return "OFF";
    }
  }

}
