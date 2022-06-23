import { Component, OnInit, ElementRef } from '@angular/core';
import { JobPost } from '../models/job';
import { JobsService } from '../services/jobs.service';
import $ from 'jquery';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  JobPosts: JobPost[];
  currentJobPost;

  constructor(private jobsService: JobsService, private elem: ElementRef) { }

  ngOnInit(): void {
    this.jobsService.getJobList().subscribe(results => {
      this.JobPosts = results; 
    });
  }

  closeModal(job: JobPost) {
    // Set passed Job to current JobPost to show modal
    this.currentJobPost = job;
    var modal = document.getElementById('jobModal' + job.id);
    // display modal
    modal.style.display = 'none';
  }
  
  showJobModal(job: JobPost) {
    // Set passed Job to current JobPost to show modal
    this.currentJobPost = job;
    var modal = document.getElementById('jobModal' + job.id);
    // hide modal
    modal.style.display = 'block';
  }
}