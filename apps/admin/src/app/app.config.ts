import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { fetcherInterceptor } from '@absence-management/fetcher';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(withFetch(), withInterceptors([fetcherInterceptor])),
    provideAnimationsAsync(),
  ],
};
