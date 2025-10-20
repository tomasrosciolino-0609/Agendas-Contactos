import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from '../interfaces/auth-type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router = inject(Router);
  token: null | string = localStorage.getItem("token");

  async login(loginData: LoginData) {
    const res = await fetch("https://agenda-api.somee.com/api/authentication/authenticate", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(loginData)
    })
    console.log("aslkdjalsdhkashdka")

    if (res.ok) {
      this.token = await res.text()
      localStorage.setItem("token", this.token);
      this.router.navigate(["/"])
    }
    console.log("Respuesta del back ", res);
  }

  logout() {
    this.token = null;
    localStorage.removeItem("token")
    this.router.navigate(["/login"])
  }
}
