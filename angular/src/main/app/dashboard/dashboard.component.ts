import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
  selector: 'my-dashboard',
  template: require('./dashboard.component.html')
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(private _heroService: HeroService) { }
    ngOnInit() {
      this._heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1, 5));
    }
    gotoDetail() { /* not implemented yet */ }
 }
