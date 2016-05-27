import {Component, Input} from 'angular2/core';
import {Hero} from './hero';

@Component({
    selector: 'my-hero-detail',
    template: require('./hero-detail.component.html')
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}
