import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routing } from './app.routes';
import { MaterializeModule } from 'angular2-materialize';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        MaterializeModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
