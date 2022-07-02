import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { JobsService } from '../services/jobs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signupForm: FormGroup;
  newUser: User;


  constructor(private formBuilder : FormBuilder, private service : JobsService, private router : Router, private http : HttpClient) { }

  ngOnInit(): void {

    
this.signupForm = this.formBuilder.group({
  firstName:[''],
  lastName:[''],
  username:[''],
  role:[''],
  email:[''],
  password:['']

})

  }

  signUp(){
    this.http.post("http://localhost:4000/users/register", this.signupForm.value).subscribe(res=> {
    alert("Signup Successful")
    this.signupForm.reset();  
    this.router.navigate(['/login']);
    },err=>{
      alert("Please try again, something went wrong")
    });
  }
 

}
// http://localhost:3000/users