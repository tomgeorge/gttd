import {Component, Input, Output, EventEmitter} from '@angular/core';
import * as moment from 'moment';
import { Todo } from './todo.builder';
import {TodoService} from './todo.service';
import './todo.css';
import { ConsoleLogService } from '../shared/console.log.service';
import {Observable} from 'rxjs/Rx';
import {TimerComponent} from './timer.component';

@Component({
  selector: 'todo-detail',
  template: require('./todo-detail.component.html'),
  directives: [TimerComponent]
})
 
export class TodoDetailComponent {

  @Input()
  todo: Todo;
  error: any;
  selectedTodo: Todo;

  @Output()
  deleted = new EventEmitter<Todo>();

  constructor(
    private logger: ConsoleLogService,
    private todoService: TodoService) { }

  toggle(Todo: Todo) {
    this.logger.log('toggled: ' + Todo.description);
    Todo.completed = !Todo.completed;
  }

  pause(Todo: Todo) {
    this.logger.log('Paused: ' + Todo.name);
    Todo.inProgress = false;

    let now = moment;
    this.logger.log(now.duration(Todo.time).milliseconds());
    Todo.time = Todo.time + Date.now() - Todo.startTime;
    this.logger.log('Todo.time: ' + this.currentTimeSpent(Todo));
  }

  setInProgress(Todo: Todo) {
    this.logger.log('Played: ' + Todo.name);
    Todo.inProgress = true;
    Todo.startTime = Date.now();
  }

  delete() {
    this.logger.log('delete');
    this.deleted.emit(this.todo);
  }

  onSelect(todo: Todo) {
    this.selectedTodo = todo;
    this.logger.log(`selected todo name ${this.selectedTodo.name}`);
  }

  setElapsedTime($event) {
    this.logger.log('In setElapsedTime: ' + $event.value);
    this.todo.time = $event.value;
  }

  public currentTimeSpent(Todo: Todo): string {
    return this.convertMillisecondsToDigitalClock(Todo.time).clock;
  }



  convertMillisecondsToDigitalClock(ms: number) {
    let hours = Math.floor(ms / 3600000); // 1 Hour = 36000 Milliseconds
    let minutes = Math.floor((ms % 3600000) / 60000); // 1 Minutes = 60000 Milliseconds
    let seconds = Math.floor(((ms % 360000) % 60000) / 1000); // 1 Second = 1000 Milliseconds
    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      clock: hours + ':' + minutes + ':' + seconds
    };
  }

}
