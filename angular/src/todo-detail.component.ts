import {Component, Input} from 'angular2/core';
import {Todo} from './todo';

let template = `
  <div *ngIf="todo">
    <h2>{{todo.name}} details!</h2>
    <div><label>id: </label>{{todo.id}}</div>
    <div>
      <label>description: </label>
      <h2>{{todo.description}}</h2>
    </div>
  </div>
`;

@Component({
    selector: 'my-todo-detail',
    template: template
})
export class TodoDetailComponent {
    @Input()
    todo: todo;
}
