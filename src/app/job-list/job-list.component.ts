import { Component, OnInit, ElementRef } from '@angular/core';
import { JobPost } from '../models/job';
import { JobsService } from '../services/jobs.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  JobPosts: JobPost[];
  currentJobPost;

  oldJob: JobPost;

  public userFirstName: string|null;

  constructor(private jobsService: JobsService, private jwtHelper: JwtHelperService) { }

  isUserAuthenticated() {
    const token: string = localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    else {
      return false;
    }
  }

  ngOnInit(): void {
  
    this.userFirstName = localStorage.getItem('userFirstName');

    this.jobsService.getJobList().subscribe(results =>
      {this.JobPosts = results});

     
    
      const logOutBtn = document.getElementById('logOutBtn');
      logOutBtn.addEventListener('click', function(){
        console.log('hello');
        localStorage.removeItem('jwt');
        localStorage.removeItem('userFirstName');
        window.location.reload();
      })
  }

  deleteJob(job: JobPost){
    console.log('nope');
    this.currentJobPost = job;
    this.jobsService.deleteJob(this.currentJobPost.id).subscribe(()=> {
      alert('Job has been deleted')
      // this.router.navigate(['/']);
    },err =>{
      console.log("Error")
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
