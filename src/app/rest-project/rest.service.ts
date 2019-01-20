import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  Request_URLs = {
    'ext_temp': 'https://api.github.com/users/seeschweiler',
    'int_temp': 'https://api.github.com/users/seeschweiler',
    'illumin': 'https://api.github.com/users/seeschweiler',
    'presence': 'https://api.github.com/users/seeschweiler',
    'opening_hour': 'http://jsonplaceholder.typicode.com/posts',
    'closing_hour': 'http://jsonplaceholder.typicode.com/posts',
    'heater_threshold': 'http://jsonplaceholder.typicode.com/posts',
    'illumin_threshold': 'http://jsonplaceholder.typicode.com/posts',
    'heater_state': 'http://jsonplaceholder.typicode.com/posts',
    'lights_state': 'http://jsonplaceholder.typicode.com/posts',
    'doors_state': 'http://jsonplaceholder.typicode.com/posts',
    'alarm_state': 'http://jsonplaceholder.typicode.com/posts',
  }

  GET(res: string) {
    return this.http.get<UserResponse>(this.Request_URLs[res]);
  }

  POST(res: string) {
    return this.http.post(this.Request_URLs[res], {
      title: 'foo',
      body: 'bar',
      userId: 1
    });
  }
}

interface UserResponse {
  login: string;
  bio: string;
  company: string;
}
