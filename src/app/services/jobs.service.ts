import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobPost } from '../models/job';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  baseUrl = "http://localhost:7172/api/jobPost"

  constructor(private http: HttpClient) { }

  getJobList(): Observable<JobPost[]> {
    return this.http.get<JobPost[]>(this.baseUrl);
  }
}
