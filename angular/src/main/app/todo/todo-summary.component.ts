import {Component, Input} from '@angular/core';
import {Todo} from './todo.builder';
import './todo.css';

@Component({
    selector: 'todo-summary',
    template: require('./todo-summary.component.html')
})
export class TodoSummaryComponent {
    @Input()
    todo: Todo;

}
