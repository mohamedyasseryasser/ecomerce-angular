import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CarservicesService } from './services/carservices.service';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(CarservicesService);
    const router = inject(Router);
    
    if (authService.isauth()) {
        return true;

    } else {
        router.navigate(['/login']);
        return false; 
    }
};
