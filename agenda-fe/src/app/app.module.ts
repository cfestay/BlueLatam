import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from "@angular/router"
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListContactsComponent } from './components/list-contacts/list-contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';

const routers:Routes=[
  {path:'contacts', component: ListContactsComponent},
  {path:'addcontacts', component:AddContactComponent},
  {path:'editcontact', component:AddContactComponent},
  {path:'editcontact/:id', component:AddContactComponent},
  {path:'', redirectTo:'/contacts', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ListContactsComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,   
    HttpClientModule,
    RouterModule.forRoot(routers),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
