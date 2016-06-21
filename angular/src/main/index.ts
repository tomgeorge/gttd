import 'angular2-materialize';
import './index.css';

import {bootstrap}    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './app/shared/in-memory-data.service';
import { enableProdMode, provide } from '@angular/core';
import { AppComponent } from './app/app.component';
import { ConsoleLogService } from './app/shared/console.log.service';
import { NgRedux } from 'ng2-redux';

if (process.env.ENV === 'production') {
  enableProdMode();
  console.log('entered prod mode');
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  NgRedux,
  provide(ConsoleLogService, {useClass: ConsoleLogService}),
  provide(XHRBackend, {useClass: InMemoryBackendService}),
  provide(SEED_DATA, {useClass: InMemoryDataService})]);
