import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

interface myData {
  success: boolean,
  message: string
}
@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }

  getAllExams(): Observable<any> {
    return this.http.get(environment.SERVER_URL + '/exams');
  }

  getAllTests(): Observable<any> {
    return this.http.get(environment.SERVER_URL + '/tests');
  }
}
