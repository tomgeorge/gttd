import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';
import './hero.css';


@Component({
    selector: 'my-heroes',
    template: require('./heroes.component.html'),
    directives: [HeroDetailComponent],
    providers: []
})

export class HeroesComponent implements OnInit {
    title : 'Tour of Heroes';
    heroes : Hero[];
    selectedHero: Hero;

    constructor(private _heroService: HeroService)  { }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit () {
        this.getHeroes();
    }
    onSelect(hero: Hero) { this.selectedHero = hero; }
}
