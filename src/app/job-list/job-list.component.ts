import { Component, OnInit } from '@angular/core';
import { JobPost } from '../models/job';
import { JobsService } from '../services/jobs.service';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs: JobPost[];

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.jobsService.getJobList().subscribe(results =>
      {this.jobs = results});
  }

}
