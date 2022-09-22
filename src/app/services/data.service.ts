import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'https://zil-test.s3.us-east-1.amazonaws.com/json-data.json';
  constructor(private httpClient: HttpClient) {}
  getAllEmployees() {
    return this.httpClient.get<any>(this.url);
  }
}
