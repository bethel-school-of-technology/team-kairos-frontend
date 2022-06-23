import { Component, OnInit } from '@angular/core';
import { JobPost } from '../models/job';
import { JobsService } from '../services/jobs.service';
import { JwtHelperService } from '@auth0/angular-jwt';
declare var jQuery: any;


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  JobPosts: JobPost[];

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

  

    // Show Modal on click
    var modal = document.getElementById('jobModal');
    var closeBtn = document.getElementById('closeBtn');
    var modalBtn = document.getElementById('openModalBtn')

    //Listen for click
    modalBtn.addEventListener('click', openModal);

    //Open Modal function
    function openModal() {
      modal.style.display = 'block';
    }

    //listen for close click
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', clickOutside);

    //Close Modal function
    function closeModal() {
      modal.style.display = 'none';
    }
    function clickOutside(e) {
      if (e.target == modal){
        modal.style.display = 'none';
      }
    }
  }

  deleteJob(){
    this.jobsService.deleteJob(this.oldJob).subscribe(()=> {
      alert('Job has been deleted')
      // this.router.navigate(['/']);
    },err =>{
      console.log("Error")
    });
    



  }



}

// // Show Modal on click
// var modal = document.getElementById('jobModal');
// var closeBtn = document.getElementById('closeBtn');
// var modalBtn = document.getElementById('openModalBtn')

// //Listen for click
// modalBtn.addEventListener('click', openModal);

// function openModal(){
//   console.log('123');
// }