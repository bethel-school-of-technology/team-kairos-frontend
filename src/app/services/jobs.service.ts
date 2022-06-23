import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobPost } from '../models/job';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  baseUrl = "https://localhost:7172/api/JobPost"

  jsonServer = "http://localhost:3000/signupUsers"

  constructor(private http: HttpClient) { }

  getJobList(): Observable<JobPost[]> {
    return this.http.get<JobPost[]>(this.baseUrl);
  }

  createjob(job: JobPost){
    return this.http.post(this.baseUrl, job);
}

  signUp(user: User){
    return this.http.post(this.jsonServer, user)
  }

  deleteJob(job: JobPost){
    const url = this.baseUrl + job.id;
    return this.http.delete(url);

}
}
