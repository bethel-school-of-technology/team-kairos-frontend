import { Component, OnInit } from '@angular/core';
import { JobPost } from '../models/job';
import { JobsService } from '../services/jobs.service';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  JobPosts: JobPost[];

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.jobsService.getJobList().subscribe(results =>
      {this.JobPosts = results});
    
      const logOutBtn = document.getElementById('logOutBtn');
      logOutBtn.addEventListener('click', function(){
        console.log('hello');
        localStorage.removeItem('jwt');
      })

  }

  logOut(){
    console.log("Hello");
    // localStorage.removeItem('jwt');
  }

  // localStorage.removeItem('jwt');

}
