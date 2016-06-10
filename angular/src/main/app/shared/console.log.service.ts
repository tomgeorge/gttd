import { Injectable } from '@angular/core';

@Injectable()
export class ConsoleLogService {

    public log(...args: any[]) {
        console.log(args);
    }

    public error(...args: any[]) {
        console.error(args);
    }

    public debug(...args: any[]) {
        console.debug(args[0], ...args[1]);
    }

    public info(...args: any[]) {
        console.info(args);
    }
}
