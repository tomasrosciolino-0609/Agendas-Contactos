import { CanActivateChildFn, RedirectCommand, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { inject } from '@angular/core';

export const onlyLoggedUserGuard: CanActivateChildFn = (childRoute, state) => {
  const auth = inject(AuthService);
  const router = inject(Router)
  if(!auth.token){
    const newPath = router.parseUrl("/login");
    return new RedirectCommand(newPath, {
      skipLocationChange: true,
    });
  }
  return true;
};
