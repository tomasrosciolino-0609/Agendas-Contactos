import { Component, inject, input, OnInit, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from '../../services/contacts-service';
import { ContactT, NewContactT } from '../../interfaces/contact-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-contact',
  imports: [FormsModule],
  templateUrl: './new-contact.html',
  styleUrl: './new-contact.scss'
})
export class NewContact implements OnInit {
  contactService = inject(ContactService);
  router = inject(Router);
  idContacto = input<number>();
  contactoOriginal: ContactT | undefined = undefined;
  form = viewChild<NgForm>('newContactForm');

  
  isSubmitting = false;

  async ngOnInit() {
    
    if (this.idContacto()) {
      this.contactoOriginal = await this.contactService.getContactsById(this.idContacto()!);
      this.form()?.setValue({
        firstName: this.contactoOriginal!.firstName,
        lastName: this.contactoOriginal!.lastName,
        address: this.contactoOriginal!.address,
        email: this.contactoOriginal!.email,
        image: this.contactoOriginal!.image,
        number: this.contactoOriginal!.number,
        company: this.contactoOriginal!.company,
        isFavorite: this.contactoOriginal!.isFavorite,
      })
    }
  }

 
  async handleFormSubmission(form: NgForm) {
    
    if (form.invalid) return;

    this.isSubmitting = true; 

    try {
      const contactData: NewContactT = {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        address: form.value.address,
        email: form.value.email,
        image: form.value.image,
        number: form.value.number,
        company: form.value.company,
        isFavorite: form.value.isFavorite === true,
      }

      if (this.idContacto()) {
        await this.contactService.editContact({ ...contactData, id: this.idContacto()!.toString() });
        if (this.contactoOriginal?.isFavorite !== contactData.isFavorite) {
          await this.contactService.setFavourite(this.idContacto()!);
        }
      } else {
        const contactoCreado = await this.contactService.createContact(contactData);
        if (contactData.isFavorite === true) {
          await this.contactService.setFavourite(contactoCreado.id);
        }
      }

      this.router.navigate(["/"]);
    } catch (error) {
      console.error("Error al procesar el formulario:", error);
    } finally {
      this.isSubmitting = false; 
    }
  }
}
