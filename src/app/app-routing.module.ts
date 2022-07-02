import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { UnauthPageComponent } from './unauth-page/unauth-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { DeletePostComponent } from './delete-post/delete-post.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: JobListComponent,
    
  },
  {
    path: 'createjob',
    component: CreateJobComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'editjob/:id',
    component: EditJobComponent,
    canActivate: [AuthGuardService]
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
  },
  {
    path: 'error',
    component: UnauthPageComponent,
    
  },
  {
    path: 'delete',
    component: DeletePostComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
