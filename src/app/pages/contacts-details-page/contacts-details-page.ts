import { Component, inject, input, OnInit } from '@angular/core';
import { ContactService } from '../../services/contacts-service';
import { ContactT } from '../../interfaces/contact-type';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contacts-details-page.html',
  styleUrl: './contacts-details-page.scss'
})
export class ContactDetails implements OnInit {
  contactService = inject(ContactService);
  id = input.required<string>(); 
  contact: ContactT | undefined;
  async ngOnInit() {
    this.contact = await this.contactService.getContactsById(this.id());
  }
}
