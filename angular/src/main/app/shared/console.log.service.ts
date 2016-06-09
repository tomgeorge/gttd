import { Injectable, provide } from '@angular/core';

@Injectable()
export class ConsoleLogService {

    public log(...args: any[]) {
        console.log(args);
    }
}