import {Component, Input} from 'angular2/core';
import {Todo} from './todo';
import './todo.css';

@Component({
    selector: 'todo-summary',
    template: require('./todo-summary.component.html')
})
export class TodoSummaryComponent {
    @Input()
    todo: Todo;

}
