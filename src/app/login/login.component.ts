import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;


  public loginForm: FormGroup

  constructor(private formBuilder : FormBuilder, private router : Router, private http : HttpClient ) { }

  ngOnInit(): void {


  this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
    
 

  login(){
    this.http.post("http://localhost:3000/login", this.loginForm.value)
    .subscribe(response => {
      const token = (<any>response).accessToken;
      localStorage.setItem("jwt", token);
      localStorage.setItem("userFirstName", (<any>response).user.firstName);
      this.invalidLogin = false;
      this.router.navigate(["/"]);
    },err => {
      this.invalidLogin = true;
    }
    )

  }



// this.loginForm = this.formBuilder.group({
//   email:[''],
//   password:['']
// })

//   }
  // login(){
  //   this.http.post("http://localhost:3000/login")
  //   .subscribe(res=>{
  //     const user = res.find((a:any)=>{
  //       return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
  //     })
  //   })
  // }


}
