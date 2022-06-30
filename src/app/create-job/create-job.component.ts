import { Component, OnInit } from '@angular/core';
import { JobPost } from '../models/job';
import { JobsService } from '../services/jobs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  newJob: JobPost;

  constructor(private service: JobsService, private router: Router ) { }

  ngOnInit(): void {
    this.newJob= new JobPost();
  }

  createJob(){
    this.service.createjob(this.newJob).subscribe(()=> {
      this.router.navigate(['/']);
    },err =>{
      alert("Please enter valid information");

    });
  }

}
