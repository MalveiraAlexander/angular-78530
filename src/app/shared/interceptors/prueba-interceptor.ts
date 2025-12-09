import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

export const pruebaInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  console.log(req);
  // if (req.method === 'PUT') {
  //   let modifiedReq = req.clone({
  //     body: {...(req.body as any), prueba: 'valor agregado por el interceptor'},
  //     headers: req.headers.set('X-Prueba-Interceptor', 'true')
  //   });
  //   return next(modifiedReq);
  // }
  
  
  return next(req).pipe(    
    catchError((err) => {
      if (err.status == 404) {
        router.navigate(['/s/subjects']);
      }
      console.log(err);
      throw err;
    }),
  );
};
