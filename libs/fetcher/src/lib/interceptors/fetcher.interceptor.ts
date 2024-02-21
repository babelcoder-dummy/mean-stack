import { HttpInterceptorFn } from '@angular/common/http';

export const fetcherInterceptor: HttpInterceptorFn = (req, next) => {
  return next(
    req.clone({
      url: `${import.meta.env.NG_APP_API_URL}${req.url}`,
    })
  );
};
