import { Component, OnInit } from 'angular2/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import {dashboardHtml} from './dashboard.component.html'; // interesting hack

@Component({
  selector: 'my-dashboard',
  template: dashboardHtml
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(private _heroService: HeroService) { }
    ngOnInit() {
      this._heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1,5));
    }
    gotoDetail(){ /* not implemented yet */}
 }
