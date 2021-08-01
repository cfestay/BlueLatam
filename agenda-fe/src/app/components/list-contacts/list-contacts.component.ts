 import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  public contacts:Contact[]=[];

  constructor(private _contactService:ContactService) { }

  ngOnInit(): void {
    this._contactService.getContacts().subscribe(
      data =>this.contacts=data
    )
  }
  delete(contact:Contact):void{
    this._contactService.delete(contact.id).subscribe(
      response=>{
        this.contacts=this.contacts.filter(cont=>cont !== contact)
        Swal.fire('Eliminado',`${contact.firstName} ${contact.lastName} Eliminado`, 'success')
      }
    )
    }


}
