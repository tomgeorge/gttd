import {Component, Input} from 'angular2/core';
import {Todo} from './todo';

let template = `
  <div *ngIf="todo">
    <div><label>description: </label>{{todo.description}}</div>
    <div><label>estimate: </label>{{todo.estimate}}</div>
    <div><label>in progress?: </label>{{todo.inProgress}}</div>
  </div>
`;

@Component({
    selector: 'todo-detail',
    template: template
})
export class TodoDetailComponent {
    @Input()
    todo: Todo;
}
