import { Component } from '@angular/core';
import { Router }            from '@angular/router';
import './dashboard.component.css';

@Component({
  selector: 'my-dashboard',
  template: require('./dashboard.component.html')
})
export class DashboardComponent {
  constructor(
    private router: Router) {
  }
}
