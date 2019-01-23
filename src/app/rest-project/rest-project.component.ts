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

  data = {
    'ext_temp': 7,
    'int_temp': 21,
    'illumin': 600,
    'presence': false,
    'opening_hour': '06:00',
    'closing_hour': '22:30',
    'heater_threshold': 10,
    'illumin_threshold': 250,
    'heater_state': false,
    'lights_state': false,
    'doors_state': false,
    'alarm_state': false,
  }

  formValue = new FormControl(null, Validators.required);

  constructor(private restService: RestService) { 
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);

    setInterval(() => {
      this.getRequest('alarm_state');
    }, 5000);
  }

  ngOnInit() {
  }

  getRequest(src: any) {
    this.showSpinner = true;
    this.restService.GET(src)
    .subscribe(
      data => {
        this.showSpinner = false;
        this.addLog("GET", src, data.toString());
        this.data[src] = data;
      },
      err => {
        this.showSpinner = false;
        this.addLog("GET", src, err.message);
      }
    );
  }

  postRequest(src: any) {
    this.showSpinner = true;
    const val = this.formValue.value;
    console.log(val);
    this.restService.POST(src, val)
    .subscribe(
      () => {
        this.showSpinner = false;
        this.addLog("POST", src, val.toString());
      },
      err => {
        this.showSpinner = false;
        this.addLog("POST", src, err.message);
      }
    );
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

  getPresence(state: number): string {
    if (state) {
      return "AHHH!"
    } else {
      return "Cool";
    }
  }

  roundData(data: any) {
    return Number(data).toFixed(1);
  }

}
