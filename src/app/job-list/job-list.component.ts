import { Component, OnInit } from '@angular/core';
import { JobPost } from '../models/job';
import { JobsService } from '../services/jobs.service';
declare var jQuery: any;


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  JobPosts: JobPost[];

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.jobsService.getJobList().subscribe(results => { this.JobPosts = results });

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