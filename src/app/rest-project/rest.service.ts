import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  Request_URLs = {
    'ext_temp': 'http://192.168.43.234:4200/REST_Smart_Rooms_Project/webapi/GEI_READING_ROOM/heater-actuator',
    'int_temp': 'https://api.github.com/users/seeschweiler',
    'illumin': 'https://api.github.com/users/seeschweiler',
    'presence': 'https://api.github.com/users/seeschweiler',
    'opening_hour': 'http://jsonplaceholder.typicode.com/posts',
    'closing_hour': 'http://jsonplaceholder.typicode.com/posts',
    'heater_threshold': 'http://192.168.43.234:4200/REST_Smart_Rooms_Project/webapi/GEI_READING_ROOM/heater-actuator/threshold/',
    'illumin_threshold': 'http://jsonplaceholder.typicode.com/posts',
    'heater_state': 'http://192.168.43.234:4200/REST_Smart_Rooms_Project/webapi/GEI_READING_ROOM/heater-actuator',
    'lights_state': 'http://jsonplaceholder.typicode.com/posts',
    'doors_state': 'http://jsonplaceholder.typicode.com/posts',
    'alarm_state': 'http://jsonplaceholder.typicode.com/posts',
  }

  GET(res: string) {
    return this.http.get(this.Request_URLs[res]);
  }

  POST(res: string, value: any) {
    return this.http.post(this.Request_URLs[res] + value, null);
  }
}

interface om2mResponse {
  'm2m:cin': string;
}
