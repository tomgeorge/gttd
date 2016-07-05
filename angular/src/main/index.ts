import 'angular2-materialize';
import './index.css';

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './app/common/auth.guard';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './app/shared/in-memory-data.service';
import { enableProdMode, provide } from '@angular/core';
import { ConsoleLogService } from './app/shared/console.log.service';
import { NgRedux } from 'ng2-redux';

import { AppComponent } from './app/app.component';
import { routes } from './app.routes';

if (process.env.ENV === 'production') {
  enableProdMode();
  console.log('entered prod mode');
}

bootstrap(AppComponent, [
  provideRouter(routes),
  HTTP_PROVIDERS,
  AUTH_PROVIDERS,
  AuthGuard,
  NgRedux,
  provide(ConsoleLogService, {useClass: ConsoleLogService})
/*  provide(XHRBackend, {useClass: InMemoryBackendService}),
  provide(SEED_DATA, {useClass: InMemoryDataService})*/
]);
