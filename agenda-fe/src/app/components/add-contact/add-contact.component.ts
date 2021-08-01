import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  
  public contact:Contact=new Contact();

  constructor(private _contactService:ContactService,
              private _router:Router,
              private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadContact();
  
  }

  loadContact():void{
    this._activatedRoute.params.subscribe(params=>{
      let id=params['id']
      if(id){
        this._contactService.getContact(id).subscribe((contact)=>this.contact=contact)
      }
    })
  }

  saveContact(){
    this._contactService.saveContact(this.contact).subscribe(
      data =>{
        console.log('response',data);
        this._router.navigateByUrl("/contacts");
      }
    )
  }

  public create(): void{
    this._contactService.saveContact(this.contact).subscribe(
      response =>{
        this._router.navigate(['/contacts'])
        Swal.fire('Creacion',`${response.firstName} ${response.lastName} creado`, 'success')
      }
     
    )
  }

  update():void{
    this._contactService.update(this.contact).subscribe(
      response=> {
        this._router.navigate(['/contacts'])
        Swal.fire('Actualizacion',`${response.firstName} ${response.lastName} modificado`, 'success')

      })

    
  }
    

  

}
