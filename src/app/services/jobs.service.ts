import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobPost } from '../models/job';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  baseUrl = "https://localhost:7172/api/JobPost"

  constructor(private http: HttpClient) { }

  getJobList(): Observable<JobPost[]> {
    return this.http.get<JobPost[]>(this.baseUrl);
  }

  createjob(job: JobPost){
    return this.http.post(this.baseUrl, job);
}
}
