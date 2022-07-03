import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobPost } from '../models/job';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

  id: number;
  currentJobPost: JobPost;

  constructor(public jobService: JobsService, private route: ActivatedRoute, private routes: Router) { }

  ngOnInit(): void {
    //take in id parameter from url
    this.id = this.route.snapshot.params['id'];
    this.jobService.find(this.id).subscribe((data: JobPost) => {this.currentJobPost = data
    console.log(data)});
  }

  editJob(){
    console.log('edited')
    this.jobService.editJob(this.currentJobPost).subscribe(() => {
      this.routes.navigate(['/']);
    },err =>{
      alert("Please enter valid information");

    })
  }
}
