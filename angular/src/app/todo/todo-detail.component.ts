import {Component, Input} from 'angular2/core';
import {Todo} from './todo';

@Component({
    selector: 'todo-detail',
    template: require('./todo-detail.component.html')
})
export class TodoDetailComponent {
    @Input()
    todo: Todo;
}
