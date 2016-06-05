import {Component, Input} from '@angular/core';
import * as moment from 'moment';
import {Todo} from './todo';
import './todo.css';

@Component({
    selector: 'todo-detail',
    template: require('./todo-detail.component.html'),
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
      let now = moment;
      console.log(now.duration(Todo.time).milliseconds());
      Todo.time = Todo.time + Date.now() - Todo.startTime;
      console.log('Todo.time: ' + this.currentTimeSpent(Todo));
      // Todo.time.add(now.subtract(moment.duration(Todo.startTime)));
    }

    setInProgress(Todo: Todo) {
      console.log('Played: ' + Todo.name);
      Todo.inProgress = true;
      Todo.startTime = Date.now();
    }

    public currentTimeSpent(Todo: Todo): string {
      return this.convertMillisecondsToDigitalClock(Todo.time).clock;
    }

    convertMillisecondsToDigitalClock(ms: number) {
    let hours = Math.floor(ms / 3600000); // 1 Hour = 36000 Milliseconds
    let minutes = Math.floor((ms % 3600000) / 60000); // 1 Minutes = 60000 Milliseconds
    let seconds = Math.floor(((ms % 360000) % 60000) / 1000); // 1 Second = 1000 Milliseconds
        return {
        hours : hours,
        minutes : minutes,
        seconds : seconds,
        clock : hours + ':' + minutes + ':' + seconds
    };
  }


}
