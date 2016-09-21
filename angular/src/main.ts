import './polyfills.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import './main.scss';

platformBrowserDynamic().bootstrapModule(AppModule);
