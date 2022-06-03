import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KairosCRUDService } from '../services/kairos-crud.service';
import { Router } from '@angular/router';
import { Contact } from '../models/contact';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  newContact: Contact;

  constructor(private service: KairosCRUDService, private router: Router ) { }

  ngOnInit(): void {
    this.newContact = new Contact();
  }

  createContact(){
    this.service.createContact(this.newContact).subscribe(()=> {
      this.router.navigate(['/']);
    });
  }

}
