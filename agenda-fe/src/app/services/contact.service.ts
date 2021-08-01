import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private getUrl:string="http://localhost:8010/api/contacts";

  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  constructor(private _httpClient:HttpClient) { }

  getContacts():Observable<Contact[]>{
    return this._httpClient.get<Contact[]>(this.getUrl).pipe(
      map(response => response)
    )
  }

  saveContact(contact:Contact):Observable<Contact>{
    return this._httpClient.post<Contact>(this.getUrl, contact);
  }

  getContact(id:number):Observable<Contact>{
    return this._httpClient.get<Contact>(`${this.getUrl}/${id}`)
    
  }

  update(contact:Contact):Observable<Contact>{
    return this._httpClient.put<Contact>(`${this.getUrl}/${contact.id}`, contact)
  }
  delete(id:number):Observable<Contact>{
    return this._httpClient.delete<Contact>(`${this.getUrl}/${id}`)
  }
}
