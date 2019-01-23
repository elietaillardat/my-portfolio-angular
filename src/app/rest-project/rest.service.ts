import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  Request_URLs = {
    'ext_temp': 'http://192.168.43.234:4200/REST_Smart_Rooms_Project/webapi/GEI_READING_ROOM/temp-ext-sensor',
    'int_temp': 'http://192.168.43.234:4200/REST_Smart_Rooms_Project/webapi/GEI_READING_ROOM/temp-int-sensor',
    'illumin': 'http://192.168.43.234:4200/REST_Smart_Rooms_Project/webapi/GEI_READING_ROOM/illuminance-sensor',
    'presence': 'http://192.168.43.234:4200/REST_Smart_Rooms_Project/webapi/GEI_READING_ROOM/presence-sensor',
    'opening_hour': 'http://192.168.43.234:4200/REST_Smart_Rooms_Project/webapi/GEI_READING_ROOM/hours/open/',
    'closing_hour': 'http://192.168.43.234:4200/REST_Smart_Rooms_Project/webapi/GEI_READING_ROOM/hours/close/',
    'heater_threshold': 'http://192.168.43.234:4200/REST_Smart_Rooms_Project/webapi/GEI_READING_ROOM/heater-actuator/threshold/',
    'illumin_threshold': 'http://192.168.43.234:4200/REST_Smart_Rooms_Project/webapi/GEI_READING_ROOM/lamp-actuator/threshold/',
    'heater_state': 'http://192.168.43.234:4200/REST_Smart_Rooms_Project/webapi/GEI_READING_ROOM/heater-actuator',
    'lights_state': 'http://192.168.43.234:4200/REST_Smart_Rooms_Project/webapi/GEI_READING_ROOM/lamp-actuator',
    'doors_state': 'http://192.168.43.234:4200/REST_Smart_Rooms_Project/webapi/GEI_READING_ROOM/doors-actuator',
    'alarm_state': 'http://192.168.43.234:4200/REST_Smart_Rooms_Project/webapi/GEI_READING_ROOM/alarm-actuator',
  }

  GET(res: string) {
    return this.http.get(this.Request_URLs[res]);
  }

  POST(res: string, value: any) {
    return this.http.post(this.Request_URLs[res] + value, null);
  }
}
