import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: require('./app.component.html'),
  styles: [require('./app.scss')],
  encapsulation: ViewEncapsulation.None,

})
export class AppComponent {
  title = 'ermagerd!!';
}
