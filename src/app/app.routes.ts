import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ContactsPage } from './pages/contacts-page/contacts-page';
import { LoggedLayout } from './layout/logged-layout/logged-layout';
import { ContactsDetailsPage } from './pages/contacts-details-page/contacts-details-page';
import { Register } from './pages/register/register';

export const routes: Routes = [
    {
        path: "login",
        component: LoginPage,

    },
    
    {
        path:"",
        component:LoggedLayout,
        children:[
            {
              path: "contacts",
              component: ContactsPage,  
            },
            {
                path:"contacts/:id",
                component: ContactsDetailsPage
            },

        ]


    },
    {
        path: "Register",
        component: Register,

    },
];
