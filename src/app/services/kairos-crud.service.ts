import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class KairosCRUDService {

  thirdApi = "https://formspree.io/f/mrgjjqey";

  constructor(private http: HttpClient) { }

  createContact(contact: Contact){
    return this.http.post(this.thirdApi, contact);
  }
}
