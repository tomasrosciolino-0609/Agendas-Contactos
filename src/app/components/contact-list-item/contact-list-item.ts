import { Component, input } from '@angular/core';
import { Contact } from '../../interfaces/users';

@Component({
  selector: 'app-contact-list-item',
  imports: [],
  templateUrl: './contact-list-item.html',
  styleUrl: './contact-list-item.scss'
})
export class ContactListItem {
  contacto = input.required<Contact>()
}
