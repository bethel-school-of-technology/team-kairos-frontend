import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: JobListComponent
  },
  {
    path: 'createjob',
    component: CreateJobComponent
  },
  {
    path: 'editjob',
    component: EditJobComponent
  },
  {
    path: 'contactus',
    component: ContactUsComponent
  },
  {
    path: 'signup',
  component:SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
