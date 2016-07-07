import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'ng-timer',
    template: `
    <a *ngIf="inProgress" class="btn-flat" (click)="setInProgress()">
      <i class="material-icons">pause_circle_outline</i>
    </a>
    <a *ngIf="!inProgress" class="btn-flat" (click)="setInProgress()">
      <i class="material-icons">play_circle_outline</i>
    </a>
      {{time}}
`
})
export class TimerComponent  {

    public time: string;
    ticks = 0;
    ticks2 = 0;
//    startTime = 0;
    totalTime = 0;
//    inProgress = false;
    mySub: any;

    @Input()
    format: string;

    @Input()
    startTime: number = 1;

    @Input()
    initialTime: number = 0;
    inProgress: boolean = false;

    // @Input()
    // stopped = new EventEmitter<number>();

    @Output()
    elapsedTimeChange = new EventEmitter();

    timer = Observable.timer(1, 1000);

    tickerFunc2(tick: number) {
        this.time = this.convertMillisecondsToDigitalClock(this.totalTime + tick).clock;
      }

      setInProgress() {
          if (this.inProgress) {
            console.log('setting to not inProgress');
            this.inProgress = false;
            this.totalTime = this.totalTime + (Date.now() - this.startTime);
            this.mySub.unsubscribe();
            this.elapsedTimeChange.emit({
              value: this.totalTime
            });
            console.log('Pausing, totalTime now: ' + this.totalTime);

          } else {
            this.startTime = Date.now();
            this.ticks2 = this.totalTime;

            this.inProgress = true;
            this.mySub = this.timer.subscribe(t => this.tickerFunc2(t * 1000));
         }
         console.log('setInProgress called, value now: ' + this.inProgress);
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
      }}
