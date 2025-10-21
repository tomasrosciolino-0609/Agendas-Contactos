import { Component, inject, input } from '@angular/core';
import { ContactT } from '../../interfaces/contact-type';
import { ContactService } from '../../services/contacts-service';
import Swal from 'sweetalert2';
import { RouterModule } from '@angular/router';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-contact-list-item',
  imports: [RouterLink],
  templateUrl: './contact-list-item.html',
  styleUrl: './contact-list-item.scss'
})
export class ContactListItem {
  contact = input.required<ContactT>()
  contactService = inject(ContactService)
  ContactListItem: any;
  openDeleteModal(){
      Swal.fire({
        title: "Desea eliminar el contacto?",
        showDenyButton: true,
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonText: "Cancelar",
        denyButtonText: `Eliminar`
      }).then((result) => {
        if (result.isDenied) {
          this.contactService.deleteContact(this.contact().id);
        }
      });
  }
}
