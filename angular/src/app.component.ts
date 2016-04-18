import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero-service';
import {HeroDetailComponent} from './hero-detail.component';
import './index.css';

let template = `
        <div class="container">
            <h1>{{title}}</h1>
            <h2>My Heroes</h2>
            <ul class="heroes">
                <li *ngFor="#hero of heroes"
                [class.selected]="hero === selectedHero"
                (click)="onSelect(hero)">
                    <span class="badge">{{hero.id}}</span> {{hero.name}}
                </li>
            </ul>
            <my-hero-detail [hero]="selectedHero"></my-hero-detail>
        </div>`;

@Component({
    selector: 'my-app',
    template: template,
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class AppComponent implements OnInit {
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
