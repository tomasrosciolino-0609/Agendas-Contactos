import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/users';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  
  contacts: Contact[] = [
       {
    id:"2",
    firstName:'Tomas',
    lastName:"Rosciolino",
    adress:"oroño 890",
    email:"Tomasrosciolino@gmail.com",
    number:"3412579745",
    company:true,
    },
    {
    id:"2",
    firstName:'Augusto',
    lastName:"Bazan",
    adress:"san lorenzo 921",
    email:"Bazanaugusto@gmail.com",
    number:"3415567234",
    company:true,
    }
  ]
  
  getContacts(){}
  getContactById(){}
  createContact(){
    const nuevoContacto: Contact = {
      id:"1",
      firstName: "hola",
      lastName: "chau",
      adress: "-",
      number: "-",
      email: "-",
      company: true,
    }
  
  editContact(){}
  
  deleteContact(id:string){
    
    this.contacts = this.contacts.filter(contacts => contacts.id !== id)
  }
  setFavourite(){}
  
}

