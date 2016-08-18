import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';
import { ConsoleLogService } from '../shared/console.log.service';

import './signup.css';

const template = require('./signup.html');

@Component({
  selector: 'signup',
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: template
})
export class Signup {
  constructor(
    private logger: ConsoleLogService,
    public router: Router, public http: Http) {
  }

  signup(event, username, password) {
    this.logger.log('Signup called');
    event.preventDefault();
    this.logger.log('Signup called, after preventDefault');

    let body = JSON.stringify({ username, password });
    this.logger.log('Calling /users with body: ' + body);
    this.http.post('http://localhost:3001/users', body, { headers: contentHeaders })
      .subscribe(
        response => {
          this.logger.log('Got response');
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigate(['/home']);
        },
        error => {
        //  alert(error.text());
          this.logger.log('Got error response');
          console.log(error.text());
        }
      );
  }

  login(event) {
    event.preventDefault();
    this.router.navigate(['/login']);
  }

}
