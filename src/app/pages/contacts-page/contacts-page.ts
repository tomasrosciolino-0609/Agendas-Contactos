import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';
import { ContactT } from '../../interfaces/contact-type';
import { ContactService } from '../../services/contacts-service';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-contacts-page',
  imports: [RouterModule,ContactListItem],
  templateUrl: './contacts-page.html',
  styleUrl: './contacts-page.scss'
})
export class ContactsPage {
  ngOnInit(): void {
    this.contactService.getContacts();
  }

  authService = inject(AuthService);
  contactService = inject(ContactService)
}

