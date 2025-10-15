import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';
import{Contact} from '../../interfaces/users'

@Component({
  selector: 'app-contacts-page',
  imports: [RouterModule,ContactListItem],
  templateUrl: './contacts-page.html',
  styleUrl: './contacts-page.scss'
})
export class ContactsPage {
  Contactos: Contact[] = []
}

