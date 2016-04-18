import {Component, Input} from 'angular2/core';
import {Hero} from './hero';

let template = `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
`;

@Component({
    selector: 'my-hero-detail',
    template: template
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}
