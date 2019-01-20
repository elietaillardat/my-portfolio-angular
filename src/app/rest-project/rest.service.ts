import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  testGETUrl = 'https://api.github.com/users/seeschweiler';
  testPOSTUrl = 'http://jsonplaceholder.typicode.com/posts';

  getTest() {
    return this.http.get<UserResponse>(this.testGETUrl);
  }

  postTest() {
    return this.http.post(this.testPOSTUrl, {
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
