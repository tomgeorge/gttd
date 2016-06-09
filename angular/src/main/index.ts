import 'angular2-materialize';
import './index.css';

import {bootstrap}    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { enableProdMode } from '@angular/core';
import {AppComponent} from './app/app.component';

if (process.env.ENV === 'production') {
  enableProdMode();
  console.log('entered prod mode');
}

bootstrap(AppComponent, [HTTP_PROVIDERS]);
