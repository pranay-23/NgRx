import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './shared/store/counter.reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { blogReducer } from './shared/store/Blog/blog.reducers';
import { AppState } from './shared/store/Global/App.state';
import { provideEffects } from '@ngrx/effects';
import { BlogEffects } from './shared/store/Blog/blog.effects';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(AppState),provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideEffects(BlogEffects),provideHttpClient(), provideAnimationsAsync()]
};
