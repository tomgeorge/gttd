import {Component, Input} from 'angular2/core';
import {moment} from 'moment';
import {Todo} from './todo';
import './todo.css';

@Component({
    selector: 'todo-detail',
    template: require('./todo-detail.component.html')
})

export class TodoDetailComponent {
    @Input()
    todo: Todo;

    toggle(Todo: Todo) {
      console.log('toggled: ' + Todo.description);
      Todo.completed = !Todo.completed;
    }

    pause(Todo: Todo) {
      console.log('Paused: ' + Todo.name);
      Todo.inProgress = false;
    }

    setInProgress(Todo: Todo) {
      console.log('Played: ' + Todo.name);
      Todo.inProgress = true;
    }
}
