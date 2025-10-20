// ...existing code...
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { Spinner } from '../../components/spinner/spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, Spinner, CommonModule],
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.scss']
})
export class LoginPage {
  errorLogin = false;
  authService = inject(AuthService);
  router = inject(Router);
  isLoading = false;

  async login(form: any) {
    console.log('apretaste el boton');
    this.errorLogin = false;

    if (!form?.value?.email || !form?.value?.password) {
      this.errorLogin = true;
      return;
    }

    this.isLoading = true;
    try {
      const res = await this.authService.login(form.value);

      const result: any = res;
      const ok = result === true || !!result?.success;
      if (ok) {
        await this.router.navigate(['/']);
      } else {
        this.errorLogin = true;
      }
    } catch (err) {
      console.error(err);
      this.errorLogin = true;
    } finally {
      this.isLoading = false;
    }
  }
}
// ...existing code...