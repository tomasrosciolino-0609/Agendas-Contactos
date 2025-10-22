import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ContactsPage } from './pages/contacts-page/contacts-page';
import { LoggedLayout } from './layout/logged-layout/logged-layout';
import { ContactDetails } from './pages/contacts-details-page/contacts-details-page';
import { Register } from './pages/register/register';
import { NewContact } from './pages/new-contact/new-contact';
import { onlyPublicUserGuard } from './guards/only-public-users-guard';
import { onlyLoggedUserGuard } from './guards/only-logged-in-guard';

export const routes: Routes = [
    {
        path: "login",
        component: LoginPage,
        canActivate: [onlyPublicUserGuard],

    },
    
    {
        path:"",
        component:LoggedLayout,
        canActivateChild: [onlyLoggedUserGuard],
        children:[
            {
              path: "",
              component: ContactsPage,  
            },
            {
                path:"contacts/:id",
                component: ContactDetails
            },
    
            {
                path:"new-contact",
                component: NewContact
            },
            {
                path: "edit-contact/:idContacto",
                component: NewContact
            },
            
        ]


    },
    {
        path: "register",
        component: Register,
        canActivate: [onlyPublicUserGuard]

    },
    
];
