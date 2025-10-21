import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetails } from './contacts-details-page';

describe('ContactsDetailsPage', () => {
  let component: ContactDetails;
  let fixture: ComponentFixture<ContactDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
